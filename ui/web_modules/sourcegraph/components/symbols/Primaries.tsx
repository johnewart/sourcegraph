import * as React from "react";
import { Symbol } from "sourcegraph/components/symbols/Symbol";

interface Props {
	className?: string;
	width?: number; // appended by "px"
	style?: Object;
	color?: any;
}

export function Close(props: Props): React.ReactElement<Props> {
	return <Symbol {...props} viewBox="271 18 13 13"><path fillRule="evenodd" d="M283.056848 30.0616393c-.140544.1406008-.331196.2195943-.529996.2195943-.198799 0-.389451-.0789935-.529995-.2195943l-4.718223-4.7182235-4.71388 4.7141419c-.18901.1910208-.46582.2662373-.725512.1971404-.259691-.0690968-.462519-.2719318-.531607-.5316257-.069087-.2596938.006139-.5365009.197167-.7255048l4.714029-4.7139921-4.713168-4.7131683c-.285481-.2938424-.282119-.7624654.007547-1.0521826.289666-.2897171.758288-.2931611 1.052181-.0077326l4.713355 4.7131308 4.717288-4.7172499c.188485-.1935061.466518-.2706116.727745-.2018216.261226.06879.465224.2728309.533958.534072.068735.2612411-.008429.539258-.201975.7277023l-4.717026 4.7172499 4.718224 4.7182235c.140558.1405426.219515.3311749.219494.5299434-.000021.1987685-.079018.389384-.219606.5298969z" /></Symbol>;
};
