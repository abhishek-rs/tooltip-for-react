Tooltip for react

Usage: 

Props accepted: 

1. position - optional (right by default) - String - top|bottom|left|right
2. styles - optional prop to override default styles of tooltip - 
{
    content: {
        /* css for content section of the tooltip */
    }
    tooltip: {
        /* css for container of content in the tooltip */
    }
}
3. content - required - String|DOM element|React component

Example:

`
const redTooltip = {
  tooltip: {
    background: '#E53935',
  },
  content: {
    background: '#E53935',
  },
};

<Tooltip 
    position="top" 
    styles={redTooltip} 
    content="I'm a red tooltip below the content.">
        <img className={css.image} src="https://chelseabuzz.com/wp-content/uploads/2017/09/rickandmorty.jpg" alt="rick and morty" />
</Tooltip>`