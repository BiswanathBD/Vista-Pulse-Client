"use client"
import { useParams } from 'next/navigation';
import React from 'react';

const BlogDetails = () => {
  const {id} = useParams()
  console.log(id);
  
  return (
    <div>
        hfdcndf
    </div>
  );
};

export default BlogDetails;