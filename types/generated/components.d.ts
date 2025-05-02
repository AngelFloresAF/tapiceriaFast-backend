import type { Schema, Struct } from '@strapi/strapi';

export interface ColorImageColorImage extends Struct.ComponentSchema {
  collectionName: 'components_color_image_color_images';
  info: {
    description: '';
    displayName: 'colorImage';
  };
  attributes: {
    colorPicker: Schema.Attribute.Component<'color-image.color-picker', true> &
      Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
  };
}

export interface ColorImageColorPicker extends Struct.ComponentSchema {
  collectionName: 'components_color_image_color_pickers';
  info: {
    displayName: 'colorPicker';
  };
  attributes: {
    color: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'color-image.color-image': ColorImageColorImage;
      'color-image.color-picker': ColorImageColorPicker;
    }
  }
}
