import React, { useState, useEffect } from 'react';
const Fetching = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://www.dragonballapi.com/dragonball')
            .then(response => response.json())
            .then(data => {
                setData(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (<div className='fixed'>
            <h1 className='font-bold text-2xl'>Cargando...</h1>
        </div>);
    }

    return (
        <div className='grid grid-cols-1 gap-5 xl:grid-cols-5 w-full p-10 lg:grid-cols-4 md:grid-cols-3 '>
            {data.map((item,index)=>(
                <div className='card p-8 card-glass gris-filter' key={index}>
                    <img src={item.image} alt={`Imagen de ${item.name}`}  className='aspect-auto m-2 hover:scale-110 duration-150'/>
                    <h1 className='font-bold text-xl text-white mb-2'>{item.name}</h1>
                    <p className='text-white'>{item.race}</p>
                    <p className='text-white'>{`Planeta: ${item.planet}`}</p>
                    <p className='text-white'>{`Genero: ${item.genre}`}</p>
                    <a className='text-left' href={`/characters/${item.id}`} onClick={()=>{
                        // window.location.href=`/characters/${item.id}`
                        console.log(item.id)
                    }} >Ver mas detalles </a> 
                </div>
            ))}

        </div>
    );
};

export default Fetching;