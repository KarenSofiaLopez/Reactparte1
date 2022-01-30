import React from 'react';

const HomePage = (props) => {
    return (
        <main className="holder">
   
        <div className="homeimg">
            <img src="img/home/img01.jpg" alt="Avion"/>
        </div>
        <div className="columnas">
            <div className= "bienvenidos left">
                <h2>Bienvenidos</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto fuga expedita repudiandae provident error, id maiores impedit animi eius quod delectus laboriosam, nihil ducimus debitis. Expedita consequatur laudantium neque beatae.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui suscipit debitis modi minus possimus vero reprehenderit aliquam quibusdam obcaecati blanditiis. Perspiciatis temporibus maxime error quas ducimus asperiores saepe officiis. Aspernatur?</p>

            </div>
        <div className="testimonios right">
            <h2>Testimonios</h2>
            <div className="Testimonio">
                <span className="cita">Simplemente Excelente</span>
                <span className="autor">Juan Perez -zapatos.com</span>
            </div>
        </div>
    </div>
    </main>
    );
}

export default HomePage;