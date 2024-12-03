'use client';

import Link from 'next/link';
import React, { useState } from 'react';

import { Header } from '@/app/components/Header';
import Hint from '@/app/components/Hint';

const ValidParenthesesProblem = () => {
  const [hints, setHints] = useState([false, false, false]);

  const toggleHint = (index: number) => {
    setHints((prev) => prev.map((hint, idx) => (idx === index ? !hint : hint)));
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#13181c] text-white">
      <Header />
      <main className="flex flex-1 items-center justify-center px-4 py-8">
        <div className="w-full max-w-4xl space-y-8 rounded-lg bg-gray-800 p-6 shadow-lg">
          <header className="space-y-4">
            <h1 className="text-4xl font-extrabold">20. Valid Parentheses</h1>
            <Link
              href="https://neetcode.io/problems/validate-parentheses/"
              className="text-lg font-medium text-blue-500 hover:underline"
            >
              Problem Link
            </Link>
          </header>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Description</h2>

            <p>
              A string <code className="rounded bg-black px-1">s</code> is valid
              if:
            </p>
            <ul className="list-inside list-disc space-y-2">
              <li>
                Every open bracket is closed by the same type of close bracket.
              </li>
              <li>Open brackets are closed in the correct order.</li>
              <li>Every close bracket has a corresponding open bracket.</li>
            </ul>
            <p>
              Return <code className="rounded bg-black px-1">true</code> if{' '}
              <code className="rounded bg-black px-1">s</code> is valid, and{' '}
              <code className="rounded bg-black px-1">false</code> otherwise.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Examples</h2>
            <div className="space-y-4">
              {[
                { input: 's = "[]"', output: 'true' },
                { input: 's = "([{}])"', output: 'true' },
                { input: 's = "[(])"', output: 'false' },
              ].map((example, idx) => (
                <div
                  key={idx}
                  className="space-y-2 rounded-lg border border-gray-700 bg-[#222] p-4"
                >
                  <p className="font-semibold">
                    <strong>Example {idx + 1}:</strong>
                  </p>
                  <p>
                    Input: <code>{example.input}</code>
                  </p>
                  <p>
                    Output:{' '}
                    <code
                      className={
                        example.output === 'true'
                          ? 'text-green-400'
                          : 'text-red-400'
                      }
                    >
                      {example.output}
                    </code>
                  </p>
                  {idx === 2 && (
                    <p className="text-gray-400">
                      Explanation: The brackets are not closed in the correct
                      order.
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-lg border border-gray-700 bg-[#222] p-4">
            <h2 className="mb-2 text-2xl font-bold">Constraints</h2>
            <p>
              •{' '}
              <code className="rounded bg-black px-1">
                1 &lt;= s.length &lt;= 1000
              </code>
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Hints</h2>
            {hints.map((hintVisible, idx) => (
              <Hint
                key={idx}
                index={idx}
                hintVisible={hintVisible}
                toggleHint={toggleHint}
              />
            ))}
          </section>
        </div>
      </main>
    </div>
  );
};

export default ValidParenthesesProblem;
