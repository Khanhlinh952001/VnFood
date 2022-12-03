import Link from "next/link"

export default function Heart(){
    return (
        <div className="bg-pink-500 h-10 w-full m-0 p-0 flex" >
        <div className="leading-10 mx-10">LOGO</div>
        <ul className="flex ">

            <li className="px-7 leading-10 hover:bg-indigo-500 rounded-lg mx-7">
               <Link href='/home'>Home</Link>  
            </li>
            <li className="px-7 leading-10 hover:bg-indigo-500 rounded-lg mx-7">
                
                <Link href='/new'>New</Link>
            </li>
            <li className="px-7 leading-10 hover:bg-indigo-500 rounded-lg mx-7">
                
                <Link href='/Contact'>Contact</Link>
            </li>
            <li className="px-7 leading-10 hover:bg-indigo-500 rounded-lg mx-7">
                Menu
            </li>
        </ul>
        
    </div>
    )
}