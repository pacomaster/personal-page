import React from 'react';
import { render } from '@testing-library/react';
import Languages from './Languages';

test("First test", () => {
    //Arrange
    const testData = ["Spanish"];
    const { getByTestId } = render(<Languages languages={testData}/>);

    const language = getByTestId("Spanish");

    //Act

    //Assert
    expect(language.textContent).toBe("Spanish");
});