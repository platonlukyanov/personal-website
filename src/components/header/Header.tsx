function Header() {
	return (
		<header className="min-w-96">
			<div className="flex justify-start items-center gap-6">
				<div className="rounded-full bg-slate-200 h-20 w-20"/>				<div>
					<h1 className="font-bold text-4xl mb-2">
						Платон Лукьянов{" "}
						<span className="text-slate-400 opacity-50">| Разработчик ПО</span>
					</h1>
					<div className="text-3xl flex flex-row items-center">
                        <div className="mr-2">
						    Уже 3 года я делаю
                        </div>
                        <SwappingProducts />
					</div>
				</div>
			</div>
		</header>
	);
}

function SwappingProducts() {
    return (
        <div className="overflow-hidden h-8 relative w-72 inline-block">
            <div className="absolute inset-0 flex flex-col animate-slide-up">
                <ProductsIDo />
                <ProductsIDo />
           </div>
        </div>
    )
}

function ProductsIDo() {
    return (<>
		        <span className="text-blue-800 duration-100 font-bold">веб-приложения</span>
		        <span className="text-yellow-500 duration-100 font-bold">фронтенд</span>
		        <span className="text-green-500 duration-100 font-bold">бэкенд</span>
		        <span className="text-red-500 duration-100 font-bold">парсеры</span>
		        <span className="text-blue-400 duration-100 font-bold">телеграм-ботов</span>
            </> 
    )
}

export default Header;
