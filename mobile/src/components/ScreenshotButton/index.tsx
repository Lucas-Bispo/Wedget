import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { Trash, Camera } from 'phosphor-react-native';

import { styles } from './styles';
import {theme} from '../../theme';

interface Pros {

    screenshot: string | null;
    onTakenShot: () => void;
    onRemoveShot: () => void;
}


export function ScreenshotButton( { screenshot, onTakenShot, onRemoveShot } : Pros) {
  return (
      <TouchableOpacity 
        style={styles.container}
        onPress={screenshot ? onRemoveShot : onTakenShot}

      
      >
        screenshot
            ? 
            <Trash
            size={22}
            color={theme.colors.text_secondary}
            weight="fill"
            style={styles.removeIcon}
            />
            :
            <Trash 
                size={24}
                color={theme.colors.text_secondary}
                weight="bold"
            />

      </TouchableOpacity>
  );
}