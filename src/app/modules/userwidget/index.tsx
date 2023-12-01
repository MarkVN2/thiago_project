import Link from "next/link";


const UserWidget = () =>{
return (
    <div className="top-32 absolute bg-white grid grid-flow-row h-20 w-24 self-end rounded-2xl text-center " >
        <Link href={""}><p className="p-2">PERFIL</p></Link>
        <hr></hr>
        <Link href={"/"}>SAIR</Link>
    </div>
)
}

export default UserWidget;