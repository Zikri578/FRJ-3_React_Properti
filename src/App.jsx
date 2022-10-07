import React from 'react';
import MyButton from './components/MyButton.jsx';
import ProductCard from './components/ProductCard.jsx';

export default function App() {
    return (
        <div>
            <h2>Hallo App</h2>
            <MyButton
                content={'Login'}
                bgColor="blue"
                color="white"
                onClick={() => {
                    console.info('Login Di Klik!');
                }}
            />
            <MyButton
                content={'Register'}
                bgColor="white"
                color="Black"
                onClick={() => {
                    console.info('Register Di Klik!');
                }}
            />
            <MyButton
                content={'Logout'}
                bgColor="red"
                color="white"
                onClick={() => {
                    console.info('Logout di Klik!');
                }}
            />
            <MyButton
                content={'Home'}
                bgColor="green"
                color="white"
                onClick={() => {
                    console.info('Home di Klik!');
                }}
            />
            <MyButton
                content={'Back'}
                bgColor="black"
                color="white"
                onClick={() => {
                    console.info('Back di Klik!');
                }}
            />

            <ProductCard
                image={
                    'https://images.pexels.com/photos/1270015/pexels-photo-1270015.jpeg?auto=compress&cs=tinysrgb&w=230'
                }
                name={'Bag'}
                price={'249.900'}
            />

            <ProductCard
                image={
                    'https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=500'
                }
                name={'Sepatu'}
                price={'149.900'}
            />
        </div>
    );
}