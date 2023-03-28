import React,{useState, useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Link from "next/link";

const Create = () => {
    const dispatch = useDispatch();
    let date = new Date();
    let boards = useSelector(state => state.board.boardContents);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const onChangeTitle = useCallback((e) => {
        setTitle(e.target.value);
    });
    const onChangeContent = useCallback((e) => {
        setContent(e.target.value);
    });

    const submitBoard = useCallback(() => {
        return dispatch({
            type: 'ADD_FAQ',
            board:[boards.length + 1, title, '관리자', `${date.getFullYear()}-${date.getMonth()+1 < 10 ? "0"+(date.getMonth()+1) : date.getMonth()+1}-${date.getDate()}`, 0],
        });
    });
    
    return(
        <>
            <div className="cs_main"></div>
            <div className="faq">
                <div className="faq_title">
                    <h3>DEMETER FAQ</h3>
                </div>
                <div className="faq_content">
                    <input type="text" placeholder="제목을 입력해주세요" value={title} onChange={onChangeTitle}/>
                    <textarea val={content} placeholder="내용을 입력해주세요" onChange={onChangeContent}></textarea>
                </div>
                <div className="button_wrap">
                    <button onClick={submitBoard}>작성하기</button>
                    <Link href="/cs"><a><button>목록보기</button></a></Link>
                </div>
            </div>
        </>
    );
};

export default Create;