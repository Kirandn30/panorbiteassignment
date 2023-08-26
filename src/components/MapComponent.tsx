import React from 'react';
import GoogleMapReact from 'google-map-react';

// interface MarkerProps {
//     lat: number;
//     lng: number;
//     text: string;
// }

// const AnyReactComponent: React.FC<MarkerProps> = ({ text }) => (
//     <div style={{
//         color: 'white',
//         background: 'grey',
//         padding: '15px 10px',
//         display: 'inline-flex',
//         textAlign: 'center',
//         alignItems: 'center',
//         justifyContent: 'center',
//         borderRadius: '100%',
//         transform: 'translate(-50%, -50%)'
//     }}>
//         {text}
//     </div>
// );

interface SimpleMapProps {
    center: {
        lat: number;
        lng: number;
    };
    zoom: number;
}

export const SimpleMap: React.FC<SimpleMapProps> = ({ center, zoom }) => {
    return (
        <div className='w-[90%] m-auto h-96 rounded-2xl overflow-hidden mt-5'>
            <GoogleMapReact
                // bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
                defaultCenter={center}
                defaultZoom={zoom}
            >
                {/* <AnyReactComponent
                    lat={center.lat}
                    lng={center.lng}
                    text={''}
                /> */}
            </GoogleMapReact>
        </div>
    );
}
