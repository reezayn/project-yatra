import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';

const Explore = () => {
  return (
    <>
    <div className='min-h-screen antialiased bg-gray-100'>
    <div id='explore' className='max-w-[1200px] mx-auto py-2 px-4 text-center '>
      <h1 className='pt-6'>Explore yourself</h1>
      <p className='py-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque doloremque saepe iusto placeat prt enti accusantium quaerat. Veritatis ad enim inventore doloremque ipsam numquam laudantium dolorum rem, atque corporis, eveniet veniam neque voluptatibus recusandae? Distinctio ab obcaecati inventore neque voluptatum. Quisquam provident ut aliquid qui error adipisci non, in pariatur tempora reiciendis! Dicta, quisquam est deserunt possimus aspernatur similique? Veniam, esse. Facilis distinctio expedita quidem, ipsam a tempora cum voluptates exercitationem, earum commodi eos consectetur maiores qui incidunt voluptatem quia, mollitia iusto. Fuga laudantium sequi architecto? Impedit vitae eos itaque error ut ipsum amet voluptas corporis tempora temporibus ratione, quia ullam reprehenderit atque? Dolores iste amet soluta eos. Quasi quisquam optio ex, perferendis unde recusandae quaerat voluptatibus sapiente dolores perspiciatis eligendi amet ipsam placeat dignissimos illum, obcaecati eum omnis delectus nisi error. Quo sit explicabo cupiditate officiis illo perferendis et.consectetur adipisicing elit. Unde amet blanditiis at placeat optio quaerat dolore assumenda repellat minus rerum ea iste cumque possimus reprehenderit sint error a consequatur et ipsam, corrupti dolor nobis. Facilis perspiciatis veniam temp Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et consectetur ex quam accusantium temporibus praesentium voluptatum eius tempora labore quae. Sunt corporis pariatur quo ratione necessitatibus impedit expedita adipisci inventore. Consectetur id ad cum cumque possimus. Beatae atque id nisi, magnam pariatur a veniam. Facilis maxime consequuntur ipsum nulla aspernatur nostrum asperiores ducimus labore, autem natus reprehenderit quos pariatur eveniet tenetur? Molestiae sunt provident deleniti exercitationem quidem adipisci ad laboriosam, quas numquam! Numquam illum corrupti, aliquid id expedita unde voluptate laboriosam vero, dolores, consequatur nihil iusto suscipit nulla eaque quisquam dolore voluptates hic quibusdam doloremque commodi possimus blanditiis. Dolores, ducimus?</p>
      <Link to="exploreTab"><button className='mb-5 hover:text-black'>Explore</button></Link>    
    </div>
    </div>
    <div id='exploreLast' className="h-14">{/* this is created so that navbar doesnot covers content of section following this div, which is explore section in this case  */}
    </div>
    </>
  )
}

export default Explore