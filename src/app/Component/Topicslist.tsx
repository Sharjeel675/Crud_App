import React from 'react'
import RemoveBtn from './RemoveBtn'
import Link from 'next/link'
import Image from 'next/image'
import Contact from '../.../../../../public/contact.png'

const Topicslist = () => {
  return (
    <div>
        <div>
            <h2>Topic Title</h2>
            <div>Topic Description</div>
        </div>

        <div>
            <RemoveBtn/>
            <Link href={"/editTopic/123"}>
                <Image src={Contact} alt=''/>
            </Link>
        </div>
    </div>
  )
}

export default Topicslist