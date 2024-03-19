import React from 'react';
import type { SVGProps } from 'react';

export function BookmarkEmpty(props: SVGProps<SVGSVGElement>) {
	return (<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M6 19.5V5.615q0-.69.463-1.152Q6.925 4 7.615 4h8.77q.69 0 1.152.463q.463.462.463 1.152V19.5l-6-2.577zm1-1.55l5-2.15l5 2.15V5.615q0-.23-.192-.423Q16.615 5 16.385 5h-8.77q-.23 0-.423.192Q7 5.385 7 5.615zM7 5h10z"></path></svg>);
}