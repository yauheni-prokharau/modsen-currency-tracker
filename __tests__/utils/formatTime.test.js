import { formatTime } from "@utils";

describe("formatTime Function", () => {
  it("formats a timestamp in AM/PM format", () => {
    const timestamp = new Date("2023-09-16T14:30:00");

    expect(formatTime(timestamp)).toBe("2:30 PM");
  });

  it("formats a midnight timestamp correctly", () => {
    const timestamp = new Date("2023-09-16T00:00:00");

    expect(formatTime(timestamp)).toBe("12:00 AM");
  });

  it("formats a noon timestamp correctly", () => {
    const timestamp = new Date("2023-09-16T12:00:00");

    expect(formatTime(timestamp)).toBe("12:00 PM");
  });
});
