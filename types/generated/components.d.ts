import type { Schema, Attribute } from '@strapi/strapi';

export interface ActionHead extends Schema.Component {
  collectionName: 'components_action_heads';
  info: {
    displayName: 'Head';
    icon: 'arrow-circle-down';
    description: '';
  };
  attributes: {
    Text: Attribute.String & Attribute.Required;
    article: Attribute.Relation<
      'action.head',
      'oneToOne',
      'api::tech-article.tech-article'
    >;
  };
}

export interface ActionLink extends Schema.Component {
  collectionName: 'components_action_links';
  info: {
    displayName: 'link';
    icon: 'arrow-circle-right';
    description: '';
  };
  attributes: {
    text: Attribute.String & Attribute.Required;
    link: Attribute.String & Attribute.Required;
  };
}

export interface ContentAddressInfo extends Schema.Component {
  collectionName: 'components_content_address_infos';
  info: {
    displayName: 'Address info';
    icon: 'bed';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    content: Attribute.RichText & Attribute.Required;
  };
}

export interface ContentChapter extends Schema.Component {
  collectionName: 'components_content_chapters';
  info: {
    displayName: 'chapter';
    icon: 'ad';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    content: Attribute.RichText;
    images: Attribute.Media<'images', true>;
    numbers: Attribute.Component<'content.number', true>;
  };
}

export interface ContentFooterContent extends Schema.Component {
  collectionName: 'components_content_footer_contents';
  info: {
    displayName: 'footerContent';
    icon: 'air-freshener';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    link: Attribute.String & Attribute.Required;
    subTitle: Attribute.String;
  };
}

export interface ContentNumber extends Schema.Component {
  collectionName: 'components_content_numbers';
  info: {
    displayName: 'number';
    icon: 'check-square';
  };
  attributes: {
    description: Attribute.String;
    number: Attribute.BigInteger;
  };
}

export interface ContentPartner extends Schema.Component {
  collectionName: 'components_content_partners';
  info: {
    displayName: 'partner';
    icon: 'american-sign-language-interpreting';
  };
  attributes: {
    link: Attribute.String & Attribute.Required;
    logo: Attribute.Media<'images'> & Attribute.Required;
    image: Attribute.Media<'images'> & Attribute.Required;
  };
}

export interface ContentReferenceNav extends Schema.Component {
  collectionName: 'components_content_reference_navs';
  info: {
    displayName: 'referenceNav';
    icon: 'align-left';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    item: Attribute.Component<'action.link', true> & Attribute.Required;
  };
}

export interface ContentReference extends Schema.Component {
  collectionName: 'components_content_references';
  info: {
    displayName: 'reference';
    icon: 'at';
  };
  attributes: {
    title: Attribute.String;
    references: Attribute.Relation<
      'content.reference',
      'oneToMany',
      'api::reference.reference'
    >;
  };
}

export interface ElementButton extends Schema.Component {
  collectionName: 'components_element_buttons';
  info: {
    displayName: 'tla\u010D\u00EDtko';
    icon: 'link';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    link: Attribute.String & Attribute.Required;
    type: Attribute.Enumeration<['velke', 'pruhledna']> &
      Attribute.DefaultTo<'pruhledna'>;
  };
}

export interface ElementContactItem extends Schema.Component {
  collectionName: 'components_element_contact_items';
  info: {
    displayName: 'contact-item';
    icon: 'atlas';
    description: '';
  };
  attributes: {
    text: Attribute.String & Attribute.Required;
    link: Attribute.String & Attribute.Required;
    icon: Attribute.Enumeration<['envelope', 'phone']>;
  };
}

export interface ElementHead extends Schema.Component {
  collectionName: 'components_element_heads';
  info: {
    displayName: 'nadpis';
    icon: 'dumbbell';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
  };
}

export interface ElementImages extends Schema.Component {
  collectionName: 'components_element_images';
  info: {
    displayName: 'obr\u00E1zky';
    icon: 'images';
    description: '';
  };
  attributes: {
    images: Attribute.Media<'images' | 'videos', true> & Attribute.Required;
  };
}

export interface ElementNumbers extends Schema.Component {
  collectionName: 'components_element_numbers';
  info: {
    displayName: '\u010D\u00EDsla';
    icon: 'balance-scale-left';
    description: '';
  };
  attributes: {
    number: Attribute.Component<'content.number', true>;
  };
}

export interface ElementReference extends Schema.Component {
  collectionName: 'components_element_references';
  info: {
    displayName: 'reference';
    icon: 'folder-open';
    description: '';
  };
  attributes: {
    references: Attribute.Relation<
      'element.reference',
      'oneToMany',
      'api::reference.reference'
    >;
  };
}

export interface ElementText extends Schema.Component {
  collectionName: 'components_element_texts';
  info: {
    displayName: 'text';
    icon: 'spell-check';
    description: '';
  };
  attributes: {
    content: Attribute.RichText & Attribute.Required;
  };
}

export interface NavigationNavItem extends Schema.Component {
  collectionName: 'components_navigation_nav_items';
  info: {
    displayName: 'Nav item';
    icon: 'align-right';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    url: Attribute.String & Attribute.Required;
  };
}

export interface NavigationNavSubItem extends Schema.Component {
  collectionName: 'components_navigation_nav_sub_items';
  info: {
    displayName: 'Nav sub item';
    icon: 'arrow-circle-up';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    url: Attribute.String & Attribute.Required;
  };
}

export interface NavigationSocialNav extends Schema.Component {
  collectionName: 'components_navigation_social_navs';
  info: {
    displayName: 'Social nav';
    icon: 'arrow-alt-circle-up';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    url: Attribute.String & Attribute.Required;
    icon: Attribute.Enumeration<
      ['linkedin', 'facebook', 'instagram', 'twitter']
    >;
  };
}

export interface SeoMeta extends Schema.Component {
  collectionName: 'components_seo_metas';
  info: {
    displayName: 'Meta';
    icon: 'baby-carriage';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'action.head': ActionHead;
      'action.link': ActionLink;
      'content.address-info': ContentAddressInfo;
      'content.chapter': ContentChapter;
      'content.footer-content': ContentFooterContent;
      'content.number': ContentNumber;
      'content.partner': ContentPartner;
      'content.reference-nav': ContentReferenceNav;
      'content.reference': ContentReference;
      'element.button': ElementButton;
      'element.contact-item': ElementContactItem;
      'element.head': ElementHead;
      'element.images': ElementImages;
      'element.numbers': ElementNumbers;
      'element.reference': ElementReference;
      'element.text': ElementText;
      'navigation.nav-item': NavigationNavItem;
      'navigation.nav-sub-item': NavigationNavSubItem;
      'navigation.social-nav': NavigationSocialNav;
      'seo.meta': SeoMeta;
    }
  }
}
