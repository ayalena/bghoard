import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface ReviewUiTileProps {}

const StyledReviewUiTile = styled.div`
  color: pink;
`;

export function ReviewUiTile(props: ReviewUiTileProps) {
  return (
    <StyledReviewUiTile>
      <h1>Welcome to ReviewUiTile!</h1>
    </StyledReviewUiTile>
  );
}

export default ReviewUiTile;
