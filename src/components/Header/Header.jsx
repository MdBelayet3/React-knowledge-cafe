import profile from "../../images/profile.png"

const Header = () => {
    
    return (
        <header className="flex  p-6 m-2  justify-between items-center border-b-2">
            <h1 className='text-4xl'>Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </header>
    );
};

export default Header;