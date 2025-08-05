'use client';
import React, { useEffect, useState } from 'react';
import { InstagramEmbed } from 'react-social-media-embed';

const CARD_WIDTH = 350;

const InstaPosts = () => {
  const [postUrls, setPostUrls] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (postUrls.length === 0) {
      const fetchInstagramPosts = async () => {
        try {
          const response = await fetch('/api/instagram');
          const data = await response.json();
          const urls = data.slice(0, 6).map(post => post.permalink);
          setPostUrls(urls);
        } catch (error) {
          console.error('Error fetching Instagram posts:', error);
        } finally {
          setLoading(false);
        }
      };
      fetchInstagramPosts();
    } else {
      setLoading(false);
    }
  }, [postUrls]);

  return (
    <div className='w-full grid container grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3'>
      {loading ? (
        Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="bg-gray-300 animate-pulse"
            style={{ width: 400, height: 600, margin: '0 auto' }}
          />
        ))
      ) : (
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
