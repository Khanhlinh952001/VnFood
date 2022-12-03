import Image from "next/image"



export default function Main0(){
    return(
    <div className=" mt-32 ml-10 mr-10 positive" >
        <div>
            <h1 className="text-5xl " >There's something for everyone ! </h1>
        </div>
        {/* hinh anh */}
        <div className="mt-10 ml-10 mr-10 inline-flex" >
            <div className=" m-8  " >
                <Image
                className="z-1"
                src="/com.jpeg"
                alt="Đồ ăn"
                width={400}
                height={300}
                />
                <h1 className="text-center">Cơm</h1>
            </div>

            <div className=" m-8" >
                <Image
                src="/banhmi.png"
                alt="Đồ ăn"
                width={400}
                height={300}
                />
                <h1 className="text-center">Bánh mì</h1>
            </div>

            <div className=" m-8" >
                <Image
                src="/chao.jpeg"
                alt="Đồ ăn"
                width={400}
                height={300}
                />
                <h1 className="text-center">Cháo</h1>
            </div>

            <div className=" m-8" >
                <Image
                src="/cafe.jpeg"
                alt="Đồ ăn"
                width={400}
                height={300}
                />
                <h1 className="text-center">Đồ uống</h1>
            </div>


        </div>

        <div className="mt-10 ml-10 mr-10 inline-flex" >
            <div className="mt-0 m-8 " >
                <Image
                
                src="/comtam.jpeg"
                alt="Đồ ăn"
                width={400}
                height={300}
                />
                <h1 className="text-center">Cơm tấm</h1>
            </div>

            <div className="mt-0 m-8" >
                <Image
                src="/ga.jpeg"
                alt="Đồ ăn"
                width={400}
                height={300}
                />
                <h1 className="text-center">Gà</h1>
            </div>

            <div className="mt-0 m-8" >
                <Image
                src="/hutieu.jpeg"
                alt="Đồ ăn"
                width={400}
                height={300}
                />
                <h1 className="text-center">Hủ tiếu</h1>
            </div>

            <div className="mt-0 m-8" >
                <Image
                src="/ragan.jpeg"
                alt="Đồ ăn"
                width={400}
                height={300}
                />
                <h1 className="text-center">Gà gán</h1>
            </div>

 
        </div>



        <div className="mt-10 ml-10 mr-10 inline-flex" >
            <div className=" m-8 mt-0 " >
                <Image
                
                src="/rautron.jpeg"
                alt="Đồ ăn"
                width={200}
                height={200}
                />
                <h1 className="text-center">Rau trộn</h1>
            </div>

            <div className=" m-8 mt-0" >
                <Image
                src="/trasua.jpeg"
                alt="Đồ ăn"
                width={200}
                height={200}
                />
                <h1 className="text-center">Trà sữa</h1>
            </div>


        </div>
    </div>
    )
}