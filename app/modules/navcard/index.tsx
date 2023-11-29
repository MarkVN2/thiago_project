import Link from "next/link";

const NavCard = () => {

    return(
        <div 
        className="bg-[#2E7C80] w-[20rem] h-[26rem] rounded-xl text-center m-auto p-4 relative top-[4rem]">
            <h1 className="text-white font-extrabold text-3xl pt-5 ">VISUALIZAR <br></br> SERVIÇOS</h1>
            <div 
            className="grid grid-flow-row place-content-center">

<Link href={'/services/folha-de-pagamento'}><button className="nav-btn shadow-lg"><p>Folha de Pagamento</p></button></Link>
                <button className="nav-btn shadow-lg" ><p>Exame Médico</p></button>
                <button className="nav-btn shadow-lg"><p>Cont. de Trabalho</p></button>
                <button className="nav-btn shadow-lg"><p>Lista de Funcionários</p></button>

            </div>

        </div>

    )

}
export default NavCard;