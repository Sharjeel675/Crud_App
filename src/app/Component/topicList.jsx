import React from 'react'
import Link from 'next/link'
import {HiPencilAlt} from 'react-icons/hi'

const topicList = () => {
  return (
    <div>
                    {/* Topic List */}
        <div>
            <h2>Topic Title</h2>
            <div>Topic Description</div>
        </div>
        <div>
          <removeBtn/>
          <Link href={'/editTopic/123'}>
            <HiPencilAlt/></Link> 
        </div>
    </div>
  )
}

export default topicList