import  styled from "styled-components/native";
// console.log(styled);
export const OTPInputContainer = styled.View`
 justify-content: center;
 align-items: center;
 gap:10px;
 display:flex;
`;

export const TextInputHidden = styled.TextInput`
 width: 300px;
 border-color: #e5e5e5;
 border-width: 1px;
 border-radius: 5px;
 padding: 15px;
 position:absolute;
 opacity:0
`;



export const SplitOTPBoxesContainer = styled.Pressable`
 width: 80%;
 flex-direction: row;
 justify-content: space-evenly;
 gap:15px;
`;
export const SplitBoxes = styled.View`
 border-color: #e5e5e5;
 border-width: 2px;
 border-radius: 5px;
 padding: 15px;
 min-width: 50px;
`;

export const SplitBoxText = styled.Text`
 font-size: 20px;
 text-align: center;
 color: #e5e5e5;
 font-family:Montserrat
`;


export const SplitBoxesFocused = styled(SplitBoxes)`
 border-color: #ecdbba;
 background-color: grey;
`;
