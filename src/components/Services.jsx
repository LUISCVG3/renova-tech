import { ServiceCard } from "./services-card/servicescard"
import { useState, useEffect } from "react";

import * as TablerIcons from '@tabler/icons-react';

export function ServicesHome() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("/services.json")
            .then((res) => res.json())
            .then((data) => setData(data))
            .catch((error) => console.log(error));
    }, []);

    return (
        <section className="flex flex-col  my-32 bg-slate-50 max-w-304 mx-auto items-center " aria-labelledby="services-heading">
            <header className="mb-10 max-w-xl place-items-start text-center" >

                <h2 id="services-heading" className="text-4xl font-bold tracking-tighter text-text-secundary mb-6  font-(font-inter)">Expertise que Impulsa el Crecimiento</h2>

                <p className="text-slate-950 leading-relaxed">Combinamos precisión técnica con visión estratégica para entregar
                    productos digitales que no solo funcionan, sino que lideran industrias.</p>

            </header>

            <div className="grid md:place-items-center md:grid-cols-3 gap-4 md:gap-8 md:w-full">
                {data.map((service, index) => {
                    const Icon = TablerIcons[service.icon];
                    return (
                        <ServiceCard
                            key={index}
                            icon={Icon}
                            title={service.title}
                            description={service.description}
                            role="listitem"
                        />
                    )

                })}
            </div>
        </section>
    )
}