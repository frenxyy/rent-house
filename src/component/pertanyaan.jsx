'use client'
import { FaqItem } from "./libs";
import {Accordion, AccordionItem} from "@nextui-org/react";

const pertanyaan = () => {
    
    return (
        <>
            <section className="bg-dark w-full pt-40 pb-36" id="faq">
                <div className="container flex flex-col justify-center items-center gap-16">
                    <div className="text-center grid gap-2">
                        <h1 className="font-extrabold text-3xl text-secondary">Pertanyaan Penting</h1>
                        <p className="font-medium text-lg text-slate-300">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                    </div>
                    <div className="accordion w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
                        {FaqItem.map((faq) => {
                            return (
                            <Accordion key={faq.id} variant="bordered" className="bg-slate-800">
                                <AccordionItem key="1" className="text-slate-300" aria-label="Accordion 1" title={faq.pertanyan} titleClassName="custom-title-color">
                                    {faq.jawaban}
                                </AccordionItem>
                                
                            </Accordion>
                            )
                        })}
                    </div>
                </div>
            </section>
        </>
    );
};

export default pertanyaan;
