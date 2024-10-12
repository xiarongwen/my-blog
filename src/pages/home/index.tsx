import React, { Component } from 'react'
import Button from '../../component/button'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import './index.scss'
const Home = () => {
    return (
        <div className='content md:container md:mx-auto'>
            <div className="md:container md:mx-auto pt-20">
                <div className='title-warp'>
                    <h1 className='title name'>REZZY</h1>
                </div>
                <h1 className='title'>深耕前端技术5年</h1>
                <div>
                    <h2 className='text-slate-400 text-lg'>分享面试经历，关注前端最前沿技术</h2>
                </div>
                <div className='bottoms'>
                    <div>
                        <Button label={"技术分享"} />
                    </div>
                    <div>
                        <Button type='remove' label={"个人简介"} />

                    </div>
                </div>
            </div>

            <div className='flex flex-row box-wrap'>
                <div className='cotentbox basis-1/3 bg-gradient-to-r from-cyan-500 to-blue-500'>
                    <div className='icon'>
                        🛠️
                    </div>
                    <div className='font-bold'>
                        面经分享与总结
                    </div>
                    <div className='font-light mt-5'>
                        路漫漫其修远兮，吾将上下而求索
                    </div>
                    <div className='mt-5'>
                        <Button  label={'More->'} />
                    </div>
                </div>
                <div className='cotentbox basis-1/3 mr-10 ml-10 bg-gradient-to-r from-cyan-500 to-blue-500'>
                    <div className='icon'>
                        📑
                    </div>
                    <div className='font-bold mt-5'>
                        React框架技术分享
                    </div>
                    <div className='font-light mt-5'>
                    术业有专攻，闻道有先后
                    </div>
                    <div className='mt-5'>
                        <Button  label={'More->'} />
                    </div>
                    
                </div>
                <div className='cotentbox basis-1/3 bg-gradient-to-r from-cyan-500 to-blue-500'>
                    <div className='icon'>
                        🛎️
                    </div>
                    <div className='font-bold mt-5'>
                        其他技术分享
                    </div>
                    <div className='font-light mt-5'>
                    博观而约取，厚积而薄发
                    </div>
                    <div className='mt-5'>
                        <Button  label={'More->'} />
                    </div>
                </div>
            </div>

            <div className='mt-10'>
                <SyntaxHighlighter language="javascript"  style={oneDark}>
                    console.log("Hello Rezzy!");
                </SyntaxHighlighter>
            </div>
        </div>
    )
}

export default Home;