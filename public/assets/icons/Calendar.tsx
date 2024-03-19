import React from 'react';
import type { SVGProps } from 'react';

export function Calendar(props: SVGProps<SVGSVGElement>) {
	return (<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}><rect width={20} height={18} x={2} y={4} rx={4}></rect><path d="M8 2v4m8-4v4M2 10h20"></path></g></svg>);
}