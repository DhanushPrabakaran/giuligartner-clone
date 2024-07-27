import React from 'react'
import Image from 'next/image'
import about3 from "@/public/about-image-1.jpeg"
const Profile = () => {
  return (
    <div>
      <Image
        className="box2 absolute rounded-2xl"
        src={about3}
        width={800}
        height={800}
        alt={""}
      />
    </div>
  )
}

export default Profile
