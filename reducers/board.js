export const initialState = {
    boardContents: [
        [1, "[배송문의] 주문한 상품 - 배송은 언제 될까요?", "관리자", "2020-08-21", 100098],
        [2, "[배송문의] 배송전 취소/주소/컬러/사이즈를 변경하고 싶어요!", "관리자", "2020-08-21", 48233],
        [3, "[배송문의] 묶음배송을 히고 싶어요", "관리자", "2020-08-23", 23507],
        [4, "[배송문의] 받아온 상품의 불량이나 오배송이 된 경우", "관리자", "2020-08-28", 15512],
        [5, "[배송문의] 해외배송 주문은 어떻게 하나요?", "관리자", "2020-08-28", 12217],
        [6, "[교환/환불] 교환신청은 어떻게 하나요?", "관리자", "2020-08-29", 30958],
    ]
};

const reducer = (state=initialState, action) => {
    switch(action.type){
        case 'ADD_FAQ':{
            return{
                ...state,
                boardContents : state.boardContents.push(action.board),
            }
        }
        default:{
            return{
                ...state,
            }
        }
    }
}

export default reducer;