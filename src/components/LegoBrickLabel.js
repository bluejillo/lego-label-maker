import styled from 'styled-components';
import React from 'react';

const PAGE_WIDTH = '51pc';
const PAGE_HEIGHT = '66pc';
const LABELS_PER_PAGE = 24;
const COLUMNS = 3;
const ROWS = 8;

const LabelListContainer = styled.div`
    display: flex;
    flex-flow: column;
`;

const LabelList = styled.ul`
    --column-width: calc((${PAGE_WIDTH} / ${COLUMNS}));
    --row-height: calc(${PAGE_HEIGHT} / ${ROWS});
    display: grid;
    grid-template-columns: repeat(${COLUMNS}, var(--column-width));
    grid-template-rows: repeat(${ROWS}, var(--row-height));
    list-style: none;
    box-sizing: border-box;
    padding: 0;
    margin: 0 auto;
`;

const LabelItem = styled.li`
    display: flex;
    box-sizing: border-box;
`;

const BrickPartLeft = styled.div`
    font-size: 12pt;
    text-align: center;
    padding: 0.5rem;
    margin: auto 0;
    flex: 1;
`;

const BrickPartRight = styled(BrickPartLeft)`
    border-left: solid 1px black;
`;

const BrickImage = styled.img`
    display: block;
    width: 50px;
    height: 50px;
    margin: 0 auto;
`;

const BrickName = styled.div`
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;  
    overflow: hidden;
`;

export const LegoBrickLabel = React.forwardRef((props, ref) => {
    const pagination = (arr, size) => Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>arr.slice(i * size, i * size + size));
    let labels = pagination(props.brickParts, LABELS_PER_PAGE).map((pages, key) => {
        let pageLabels = pages.map((parts, key) => {
            let rightBrickPart, rightLabel;
            let leftBrickPart = parts[0];
            let leftLabel = (
                <BrickPartLeft data-testid={`left-brick-${leftBrickPart.PartID}`}>
                    <BrickImage data-testid={`left-brick-img-${leftBrickPart.PartID}`} src={`media/brick-images/${leftBrickPart.PartID}.png`}/>
                    <BrickName data-testid={`left-brick-name-${leftBrickPart.PartID}`}>{leftBrickPart.PartName}</BrickName>
                </BrickPartLeft>
            );
            if(parts.length > 1) {
                rightBrickPart = parts[1];
                rightLabel = (
                    <BrickPartRight data-testid={`right-brick-${rightBrickPart.PartID}`}>
                        <BrickImage data-testid={`right-brick-img-${rightBrickPart.PartID}`} src={`media/brick-images/${rightBrickPart.PartID}.png`}/>
                        <BrickName data-testid={`right-brick-name-${rightBrickPart.PartID}`}>{rightBrickPart.PartName}</BrickName>
                    </BrickPartRight>
                );
            }
            return (
                <LabelItem key={key}>
                    {leftLabel}
                    {rightLabel}
                </LabelItem>
            );
        });
        return (
            <LabelList key={key}>
                {pageLabels}
            </LabelList>
        );
    });
    return (
        <LabelListContainer ref={ref}>
            {labels}
        </LabelListContainer>
    );
});