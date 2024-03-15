import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <header className='flex justify-between items-center p-4 border-b-2  bg-green-200 rounded-lg max-w-7xl mx-auto'>
            <h1 className='text-3xl font-bold  text-center'>Knowledge Cafe</h1>
            <img src={profile} alt="" />

        </header>
    );
};

export default Header;