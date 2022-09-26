import { useState, useCallback, useMemo } from "react";
import { ChildArea } from "./ChildArea";
import "./styles.css";

export default function App() {
  console.log("App");
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  const onChangeText = (e) => setText(e.target.value);

  const onClickOpen = () => setOpen(!open);
  //アロー関数でかいた関数は毎回新しい関数と判断される。propsが変わっていると判断。
  //第二引数に[]を入れるとuserEffectと同様に最初のものを使い回すという意味になる
  const onClickClose = useCallback(() => setOpen(false), [setOpen]);
  //変数自体のメモ化。最初の4という値が使いまわされる。
  //変数の中の処理が複雑化しているときはuseMemoをする。
  const temp = useMemo(() => 1 + 3, []);
  console.log(temp);

  return (
    <div className="App">
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} onClickClose={onClickClose} />
    </div>
  );
}
