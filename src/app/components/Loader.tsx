const Loader = () => {
    return (
        <div className="flex content-center flex-wrap flex-col mt-12">
            <div className="self-center loader w-16 h-16 border-4 border-blue-400 border-solid rounded-full"></div>
            <div className="mt-8">Estamos generando tu historia...</div>
        </div>
    );
}

export default Loader;