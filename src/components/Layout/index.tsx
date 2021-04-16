/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react'
import { useState, useEffect } from 'react'
interface PostListProps {
  posts: any[]
}

export default function PostList(props: PostListProps) {
  const { posts } = props
  const [currentPostList, setCurrentPostList] = useState<JSX.Element[]>([])
  useEffect(() => {
    console.log(posts)
  }, [])
  return (
    <div>
      <ul>{currentPostList}</ul>
    </div>
  )
}
