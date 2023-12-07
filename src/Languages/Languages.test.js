import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Languages from './Languages';

test("Test changing language", () => {
    //Arrange
    const testData = [{"code":"es","lang":"spanish"},{"code":"ja","lang":"japanese"}];
    const { getByTestId } = render(<Languages languages={testData}/>);

    const buttonEs = getByTestId("es");
    expect(buttonEs.textContent).toBe("Spanish");

    const buttonJa = getByTestId("ja");
    expect(buttonJa.textContent).toBe("Japanese");

    //Act
    fireEvent.click(buttonEs);

    //Assert
    expect(buttonEs.textContent).toBe("Español");
    expect(buttonJa.textContent).toBe("Japones");

    //Act
    fireEvent.click(buttonJa);

    //Assert
    expect(buttonEs.textContent).toBe("スペイン語");
    expect(buttonJa.textContent).toBe("日本語");
});