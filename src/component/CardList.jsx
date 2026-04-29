import Image from 'next/image';
import React from 'react';

const CardList = ({p}) => {
    return (
        <div>
            <div>
                <Image src={p.image} height={100} width={100} alt='photo'></Image>
            </div>
        </div>
    );
};

export default CardList;