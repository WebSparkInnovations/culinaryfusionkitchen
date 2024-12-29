'use client';
import React, { useEffect, useState } from 'react';
import { InstagramEmbed } from 'react-social-media-embed';

const CARD_WIDTH = 350

const InstaPosts = () => {
    const [postUrls, setPostUrls] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch data only if postUrls is empty
        if (postUrls.length === 0) {
            const fetchInstagramPosts = async () => {
                const ACCESS_TOKEN =
                    'IGQWRQeHY2OVVuclN4WE9MUjFON1JONTdfeExSanhhRGZAjQWhjeE5JckJ2alZAvZAzVuenFRV05lR2tjLXMtWFdQcjRZAYlJfX3hJY2gyLWFKNnhTZAVJOMFVPLVJvRm5jQ2tnRUswVy1GVWlJSVg5Q09NbmptWEFqTnMZD';
                try {
                    const response = await fetch(
                        `https://graph.instagram.com/me/media?fields=id,caption,media_type,permalink&access_token=${ACCESS_TOKEN}`
                    );
                    const data = await response.json();
                    const urls = data.data.slice(0, 6).map(post => post.permalink);
                    setPostUrls(urls);
                } catch (error) {
                    console.error('Error fetching Instagram posts:', error);
                } finally {
                    setLoading(false); // Set loading to false after data is fetched
                }
            };
            fetchInstagramPosts();
        } else {
            setLoading(false); // If data is already available, set loading to false
        }
    }, [postUrls]);

    return (
        <div className='w-full grid container grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3'>
            {loading ? (
                // Display a skeleton placeholder while loading
                Array.from({ length: 6 }).map((_, index) => (
                    <div
                        key={index}
                        className="bg-gray-300 animate-pulse"
                        style={{ width: 400, height: 600, margin: '0 auto' }}
                    />
                ))
            ) : (
                // Display the Instagram posts when data is loaded
                postUrls.map((url, index) => (
                    <div key={index} style={{ display: 'flex', justifyContent: 'center' }}>
                        <InstagramEmbed url={url} width={CARD_WIDTH} />
                    </div>
                ))
            )}
        </div>
    );
};

export default InstaPosts;