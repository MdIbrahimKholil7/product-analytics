import React from 'react';

const Blog = () => {
    return (
        <div className='bg-slate-300 px-9'>
            <div className='max-w-[50rem] mx-auto h-[100vh] pt-[4rem] rounded-md '>
                <h1 className='text-center text-7xl font-bold mb-9 '>Question?</h1>
                <div className='grid grid-cols-1 gap-20'>

                    <article className='mt-[2rem] border-2 rounded-lg border-slate-500 px-5 py-8 '>
                        <h1 className='text-3xl mb-7'>What is the purpose of Context Api?</h1>
                        <p className='text-2xl leading-10'><strong>Ans:</strong>
                            Normally we send data any component by parent to child.Its felt annoying when wee send lots of data from parent to child.But here context api assists us to avoid prop drilling.And we access this data very easily in any component.
                        </p>
                    </article>
                    <article className='mt-[2rem] border-2 rounded-lg border-slate-500 px-5 py-8 '>
                        <h1 className='text-3xl mb-7'>What is semantic tag?</h1>
                        <p className='text-2xl leading-10'><strong>Ans:</strong>
                            HTML 5 introduce semantic tag.A semantic tag describe its meaning very easily both to meachine and human.Semantic html tag are describe the meaning very easily so machine and human can read its very easily..

                        </p>
                    
                    </article>
                    <article className='mt-[2rem] mb-[3rem] border-2 rounded-lg border-slate-500 px-5 py-8 '>
                        <h1 className='text-3xl mb-7'>Different between inline and inline-block element?</h1>
                        <p className='text-2xl leading-10'><strong>Ans:</strong>
                            The major different between inline and inline-block element height and weight.We can't set height width in inline element.Also we can't set margin top-bottom in inline element.But inline-block element we can do all of this.
                        </p>
                    </article>
                </div>
            </div>
        </div>
    );
};

export default Blog;