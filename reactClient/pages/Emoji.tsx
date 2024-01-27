import emojis from './emojis';
import { Tooltip } from 'antd';
import {SmileOutlined} from '@ant-design/icons'
interface Props {
  visible: boolean;
  onSelect: (emoji: string) => void
}

export default function Emoji(props: Props) {
  const { visible, onSelect } = props;
  const handleClickEmoji = (emoji: string) => () => {
    onSelect(emoji);
  };
  {
    emojis.map(emoji =>
    (<div key={emoji.id} onClick={handleClickEmoji(emoji.native)}>
      emoji.native
    </div>
      
      ))
  }
  
return (
  <Tooltip
    placement='topLeft'
    color={'rgb(29, 144, 245)'}
    title={
    emojis.map(emoji =>
    (<span
      key={emoji.id} onClick={handleClickEmoji(emoji.native)}>
      {emoji.native}
    </span>))
  }   
>
    <span><SmileOutlined/>表情</span>
  </Tooltip>
      
   
    
    )
 
}