//your JS code here. If required.
const output = document.getElementById("output");

output.innerHTML = `
    <tr>
        <td colspan="2">Loading...</td>
    </tr>
`;

function createPromise() {
    const startTime = performance.now();
    const delay = Math.floor(Math.random() * 3) + 1;

    return new Promise((resolve) => {
        setTimeout(() => {
            const endTime = performance.now();
            const timeTaken = (endTime - startTime) / 1000;

            resolve(timeTaken);
        }, delay * 1000);
    });
}

const startTime = performance.now();

const promise1 = createPromise();
const promise2 = createPromise();
const promise3 = createPromise();

Promise.all([promise1, promise2, promise3])
    .then((results) => {
        const totalTime = (performance.now() - startTime) / 1000;

        output.innerHTML = `
            <tr>
                <td>Promise 1</td>
                <td>${results[0].toFixed(3)}</td>
            </tr>
            <tr>
                <td>Promise 2</td>
                <td>${results[1].toFixed(3)}</td>
            </tr>
            <tr>
                <td>Promise 3</td>
                <td>${results[2].toFixed(3)}</td>
            </tr>
            <tr>
                <td>Total</td>
                <td>${totalTime.toFixed(3)}</td>
            </tr>
        `;
    });