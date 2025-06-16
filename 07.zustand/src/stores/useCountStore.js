// create : store를 생성해주는 함수
import { create } from "zustand";

const useCountStore = create((set, get) => ({
    count: 0,
    increase: () =>
        set((state) => ({
            count: state.count + 1,
        })),
    decrease: () =>
        set((state) => ({
            count: state.count > 0 ? state.count - 1 : state.count,
        })),
    increaseBy: (number) =>
        set((state) => ({
            count: state.count + number,
        })),
}));
// let {count} = get(); state와 함수들을 객체형태로 가져옴
// decrease:()=>{
//         let {count} = get();
//         if(count > 0){
//             set((state)=>({
//                 count:state.count-1,
//             }))
//         }
//     }

export default useCountStore;
