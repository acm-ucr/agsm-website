interface HeaderTitles {
    title: string;
}

const Header = ({ title }: HeaderTitles) => {
    return (
        <div className="flex w-full flex-col gap-8">
            <div className="bg-gradient-to-r from-white via-agsm-blue-100 to-white p-4">
                <p className="text-agsm-blue-200 font-agsm-main text-center text-4xl font-bold">
                    {title}
                </p>
            </div>
        </div>
    );
};

export default Header;