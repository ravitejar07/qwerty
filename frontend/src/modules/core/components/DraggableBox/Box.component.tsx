import Checkbox from 'antd/es/checkbox/Checkbox';

import { Box } from '../../interfaces/container.interface';
import ButtonElement from '../Editor/WidgetElements/ButtonElement.component';
import NumberInput from '../Editor/WidgetElements/NumberInput.component';
import PasswordInput from '../Editor/WidgetElements/PasswordInput.component';
import RadioButton from '../Editor/WidgetElements/RadioButton.component';
import Text from '../Editor/WidgetElements/Text.component';
import TextAreaElement from '../Editor/WidgetElements/TextAreaElement.component';
import TextInput from '../Editor/WidgetElements/TextInput.component';
import ToggleSwitch from '../Editor/WidgetElements/ToggleSwitch.component';

const AllComponents = {
  Button: ButtonElement,
  TextInput,
  Text,
  NumberInput,
  PasswordInput,
  Checkbox,
  RadioButton,
  ToggleSwitch,
  TextArea: TextAreaElement
};

const BoxComponent: React.FC<{ box: Box }> = ({ box }) => {
  const ComponentToRender = AllComponents[box.component];

  return (
    <div className="w-full">
      <ComponentToRender></ComponentToRender>
    </div>
  );
};

export default BoxComponent;
