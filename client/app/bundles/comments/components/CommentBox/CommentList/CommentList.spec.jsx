import { List, Map } from 'immutable';
import { React, TestUtils } from '../../../../../libs/testHelper';

import CommentList from './CommentList.jsx';
import Comment from './Comment/Comment.jsx';

const { renderIntoDocument, findRenderedDOMComponentWithTag, scryRenderedComponentsWithType } = TestUtils;

const cssTransitionGroupClassNames = {
  enter: 'elementEnter',
  enterActive: 'elementEnterActive',
  leave: 'elementLeave',
  leaveActive: 'elementLeaveActive',
};

describe('CommentList', () => {
  const comments = List.of(
    new Map({
      id: 1,
      author: 'Frank',
      text: 'hi',
    }),
    new Map({
      id: 2,
      author: 'Furter',
      text: 'ho',
    }),
  );

  it('renders a list of Comments in normal order', () => {
    const component = renderIntoDocument(
      <CommentList $$comments={comments} cssTransitionGroupClassNames={cssTransitionGroupClassNames} />,
    );
    const list = scryRenderedComponentsWithType(component, Comment);
    expect(list.length).toEqual(2);
    expect(list[0].props.author).toEqual('Frank');
    expect(list[1].props.author).toEqual('Furter');
  });

  it('renders an alert if errors', () => {
    const component = renderIntoDocument(
      <CommentList
        $$comments={comments}
        error="zomg"
        cssTransitionGroupClassNames={cssTransitionGroupClassNames}
      />,
    );

    const alert = findRenderedDOMComponentWithTag(component, 'strong');
    expect(alert.textContent).toEqual('Comments could not be retrieved. ');
  });
});
