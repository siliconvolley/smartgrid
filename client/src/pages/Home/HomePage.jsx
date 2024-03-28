import Footer from "../../components/ui/Footer";
import HomeNav from "./HomeNav";

function HomePage() {
    return (
        <>
            <div className="home-container">
                <HomeNav />
                <main className="home-content">
                    <section className="cards card-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ut similique voluptatibus commodi voluptate culpa est voluptates sed eveniet minima rem amet, dolores distinctio inventore quidem laborum? Repellat, hic. Culpa.</section>
                    <section className="cards card-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt soluta, tenetur temporibus adipisci nam sed porro? Illum, facilis. Ipsa, asperiores optio quia debitis consequatur fugiat veritatis totam deserunt dolorum itaque.</section>
                    <section className="cards card-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt quidem officia aspernatur in magni maiores, pariatur, numquam eum ea sed exercitationem nisi dolor suscipit provident quisquam tempora expedita officiis. Quisquam?</section>
                </main>
                <Footer />
            </div>
        </>
    );
}

export default HomePage;
