export interface PollinationInterface {
  structure: MStructureInterface;
}

export interface MStructureInterface {
  mentoring: MentoringInterface;
}

export interface MentoringInterface {
  id: string;
  content: Array<ContentElement>;
}

export interface ContentElement {
  title: string;
  call: string;
  text: string;
  formLink: string;
  list?: Array<ListInterface>;
  values?: Array<ValueInterface>;
  imgPicture?: string;
  imgAlt?: string;
}

export interface ListInterface {
  id: string;
  subtitle: string;
  text?: string;
  imgPicture?: string;
  imgAlt?: string;
  listLink?: string;
}

export interface ValueInterface {
  id: string;
  evaluation: Array<EvaluationInterface>;
}

export interface EvaluationInterface {
  id: string;
  value: string;
}
