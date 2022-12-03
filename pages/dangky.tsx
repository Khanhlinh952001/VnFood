import Link from "next/link";


export default function dangky(){
    return(
        <div className="w-full h-100vh flex justify-center" >
        <div className=" border border-black mt-20" >
            {/* head */}
            <div className="pl-20 pr-20 mt-5">
                <h1 className="text-pink-500 text-2xl mb-3" >Vn_Food</h1>
                <h1 className="text-center text-3xl">
                    Đăng Ký
                </h1>
                <div className="flex justify-around mt-5 border-b">
                    <p className="text-xl ml-4 mr-5 text-blue" >CMT</p>
                    <p className="text-xl ml-4 mr-5">Số điện thoại</p>
                    <p className="text-xl ml-4 mr-5">Email</p>
                </div>
            </div>
            {/* main */}
            <div className="ml-5 mr-5" >
                <div className="mt-8">
                    <h1 className="text-xl mb-2">Tên đăng nhập </h1>
                    <input
                    className="border border-black w-full mb-3 py-2"
                    placeholder="  Nhập CMT/SDT/Email"
                    type="text"
                    />
                </div>
                <div className="mt-2">
                    <h1 className="text-xl mb-2">Mật khẩu</h1>
                    <input
                    className="border border-black w-full mb-3 py-2"
                    placeholder="  Nhập Mật Khẩu"
                    type="text"
                    />
                </div>
                <div className="mt-2">
                    <h1 className="text-xl mb-2"> Mã xác thực </h1>
                    <div className="flex justify-between" >
                    <input
                    className="border border-black w-40 mb-3 py-2"
                    placeholder="  Nhập Mã "
                    type="text"
                    />
                    <div className="w-32 h-10 border bg-gray-300 ">

                    </div>
                    </div>
                </div>
            </div>
            {/* footer */}
            <div className="mr-10 ml-10">
                <button className="px-40 ml-7 mr-7 mt-2 h-10 py-3 pb-8 bg-pink-600 text-white">Đăng Ký</button>



                 <div className="flex pr-20 mt-10 mb-3 justify-around">
                <h1 className=" text-center">Bạn đã có tài khoản ?</h1> 
                <p className="font-bold"> <button> <Link href="/dangnhap">Đăng Nhập</Link></button> </p>

                <button className="bg-pink-900 text-white py-2 px-5 mr-10"><Link  href="Heart1">Trở lại</Link></button>
              </div>
            </div>

        </div>

        </div>
    )
}