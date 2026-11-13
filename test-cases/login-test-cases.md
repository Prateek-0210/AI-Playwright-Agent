# Login Page Test Cases
**Application:** https://rahulshettyacademy.com/loginpagePractise/  
**Prepared By:** QA Team  
**Date:** 2026-11-12  
**Revised:** 2026-11-13  
**Source:** Browser Exploration Report (Playwright MCP)

---

## Test Environment & Credentials

| Item | Value |
|---|---|
| Valid Username | `rahulshettyacademy` |
| Valid Password | `Learning@830$3mK2` |
| Form `id` | `login-form` |
| Form method | POST |

---

## Locator Reference

| Element | Reliable Locator |
|---|---|
| Username field | `#username` |
| Password field | `#password` |
| Admin radio | `input[value="admin"]` |
| User radio | `input[value="user"]` |
| Role dropdown | `select.form-control` |
| Terms checkbox | `#terms` |
| Sign In button | `#signInBtn` |
| Error alert | `.alert.alert-danger` |
| Modal | `#myModal` |
| Modal Cancel | `#cancelBtn` |
| Modal Okay | `#okayBtn` |
| T&C link | `a[href="#"]` |

---

## Test Cases

---

### TC-001 — Valid Login with Admin Role (Default State)

| Field | Detail |
|---|---|
| **Test Case ID** | TC-001 |
| **Summary** | Verify that a user can successfully log in using valid credentials with the Admin radio selected (default) |
| **Preconditions** | Browser is open. Page is loaded at the application URL. Admin radio is pre-selected by default. |
| **Steps** | 1. Navigate to `https://rahulshettyacademy.com/loginpagePractise/` <br>2. Confirm Admin radio (`input[value="admin"]`) is checked by default <br>3. Enter `rahulshettyacademy` in `#username` <br>4. Enter `Learning@830$3mK2` in `#password` <br>5. Click `#signInBtn` |
| **Expected Result** | User is redirected to the application's main/dashboard page. No error alert is shown. |
| **Actual Result** | Not Executed |
| **Status** | Not Executed |
| **Priority** | P1 — Critical |
| **Test Type** | Functional — Positive |

> **Coverage note (vs TC-033):** This test verifies that authentication succeeds with correct credentials and Admin role. TC-033 separately verifies the specific post-login URL change and page-content transition — that is a distinct, independently verifiable outcome.

---

### TC-002 — Valid Login with User Role

| Field | Detail |
|---|---|
| **Test Case ID** | TC-002 |
| **Summary** | Verify that selecting the User radio, dismissing the confirmation modal, and logging in with valid credentials works correctly |
| **Preconditions** | Browser is open. Page is loaded at the application URL. |
| **Steps** | 1. Navigate to the application URL <br>2. Click `input[value="user"]` (User radio) <br>3. Confirm the modal `#myModal` appears with text "You will be limited to only fewer functionalities of the app. Proceed?" <br>4. Click `#okayBtn` to confirm <br>5. Enter `rahulshettyacademy` in `#username` <br>6. Enter `Learning@830$3mK2` in `#password` <br>7. Check `#terms` checkbox <br>8. Click `#signInBtn` |
| **Expected Result** | User is logged in and redirected. Limited functionality is applied for the User role. No error alert is shown. |
| **Actual Result** | Not Executed |
| **Status** | Not Executed |
| **Priority** | P1 — Critical |
| **Test Type** | Functional — Positive |

---

### TC-003 — Valid Login with Terms Checkbox Checked

| Field | Detail |
|---|---|
| **Test Case ID** | TC-003 |
| **Summary** | Verify that a valid login succeeds when the Terms & Conditions checkbox is checked before submitting |
| **Preconditions** | Browser is open. Page is loaded. Admin radio is selected. |
| **Steps** | 1. Navigate to the application URL <br>2. Enter `rahulshettyacademy` in `#username` <br>3. Enter `Learning@830$3mK2` in `#password` <br>4. Check `#terms` checkbox <br>5. Click `#signInBtn` |
| **Expected Result** | Login succeeds and user is redirected. No error is shown. |
| **Actual Result** | Not Executed |
| **Status** | Not Executed |
| **Priority** | P2 — High |
| **Test Type** | Functional — Positive |

---

### TC-004 — Invalid Username, Valid Password

| Field | Detail |
|---|---|
| **Test Case ID** | TC-004 |
| **Summary** | Verify that login fails when an invalid username is entered with a valid password |
| **Preconditions** | Browser is open. Page is loaded. |
| **Steps** | 1. Navigate to the application URL <br>2. Enter `invaliduser123` in `#username` <br>3. Enter `Learning@830$3mK2` in `#password` <br>4. Click `#signInBtn` |
| **Expected Result** | Login fails. Error alert `.alert.alert-danger` becomes visible with text "Incorrect username/password." User remains on the login page. |
| **Actual Result** | Not Executed |
| **Status** | Not Executed |
| **Priority** | P1 — Critical |
| **Test Type** | Functional — Negative |

> **Coverage note (vs TC-031):** TC-004/005/006 verify which credential combinations cause the application to reject authentication. TC-031 specifically verifies the UI state of the error component (the `.alert.alert-danger` DOM element's visibility transition from hidden to visible) — that is a distinct UI assertion.

---

### TC-005 — Valid Username, Invalid Password

| Field | Detail |
|---|---|
| **Test Case ID** | TC-005 |
| **Summary** | Verify that login fails when a valid username is entered with an invalid password |
| **Preconditions** | Browser is open. Page is loaded. |
| **Steps** | 1. Navigate to the application URL <br>2. Enter `rahulshettyacademy` in `#username` <br>3. Enter `wrongpassword` in `#password` <br>4. Click `#signInBtn` |
| **Expected Result** | Login fails. Error alert `.alert.alert-danger` becomes visible with text "Incorrect username/password." User remains on the login page. |
| **Actual Result** | Not Executed |
| **Status** | Not Executed |
| **Priority** | P1 — Critical |
| **Test Type** | Functional — Negative |

---

### TC-006 — Both Username and Password Invalid

| Field | Detail |
|---|---|
| **Test Case ID** | TC-006 |
| **Summary** | Verify that login fails when both username and password are incorrect |
| **Preconditions** | Browser is open. Page is loaded. |
| **Steps** | 1. Navigate to the application URL <br>2. Enter `wronguser` in `#username` <br>3. Enter `wrongpassword` in `#password` <br>4. Click `#signInBtn` |
| **Expected Result** | Login fails. Error alert `.alert.alert-danger` becomes visible with text "Incorrect username/password." |
| **Actual Result** | Not Executed |
| **Status** | Not Executed |
| **Priority** | P1 — Critical |
| **Test Type** | Functional — Negative |

---

### TC-007 — Empty Username Field

| Field | Detail |
|---|---|
| **Test Case ID** | TC-007 |
| **Summary** | Verify that login fails when the username field is left empty |
| **Preconditions** | Browser is open. Page is loaded. |
| **Steps** | 1. Navigate to the application URL <br>2. Leave `#username` empty <br>3. Enter `Learning@830$3mK2` in `#password` <br>4. Click `#signInBtn` |
| **Expected Result** | **Pending Requirement Clarification.** The `#username` field has no `required` attribute and no `maxlength` constraint. The specific validation mechanism (native browser HTML5 validation, client-side JavaScript, or server-side rejection) triggered on empty submission has not been confirmed by exploration. Expected behaviour and error message text must be confirmed before this test case can be executed. |
| **Actual Result** | Not Executed |
| **Status** | Not Executed |
| **Priority** | P1 — Critical |
| **Test Type** | Functional — Negative |

---

### TC-008 — Empty Password Field

| Field | Detail |
|---|---|
| **Test Case ID** | TC-008 |
| **Summary** | Verify that login fails when the password field is left empty |
| **Preconditions** | Browser is open. Page is loaded. |
| **Steps** | 1. Navigate to the application URL <br>2. Enter `rahulshettyacademy` in `#username` <br>3. Leave `#password` empty <br>4. Click `#signInBtn` |
| **Expected Result** | **Pending Requirement Clarification.** The `#password` field has no `required` attribute. Whether submission with an empty password is blocked client-side, or reaches the server and is rejected there, has not been confirmed from exploration. Expected validation mechanism and error message text must be confirmed before execution. |
| **Actual Result** | Not Executed |
| **Status** | Not Executed |
| **Priority** | P1 — Critical |
| **Test Type** | Functional — Negative |

---

### TC-009 — Both Username and Password Empty

| Field | Detail |
|---|---|
| **Test Case ID** | TC-009 |
| **Summary** | Verify that login fails when both username and password fields are submitted empty |
| **Preconditions** | Browser is open. Page is loaded. |
| **Steps** | 1. Navigate to the application URL <br>2. Leave `#username` empty <br>3. Leave `#password` empty <br>4. Click `#signInBtn` |
| **Expected Result** | Login is blocked. An error or validation message is displayed. User is not redirected away from the login page. |
| **Actual Result** | Not Executed |
| **Status** | Not Executed |
| **Priority** | P1 — Critical |
| **Test Type** | Functional — Negative |

---

### TC-010 — Username with Only Whitespace

| Field | Detail |
|---|---|
| **Test Case ID** | TC-010 |
| **Summary** | Verify that a username consisting only of spaces is not accepted as valid |
| **Preconditions** | Browser is open. Page is loaded. |
| **Steps** | 1. Navigate to the application URL <br>2. Enter `     ` (5 spaces) in `#username` <br>3. Enter `Learning@830$3mK2` in `#password` <br>4. Click `#signInBtn` |
| **Expected Result** | Login fails. Error alert is displayed. Application does not treat whitespace as a valid username. |
| **Actual Result** | Not Executed |
| **Status** | Not Executed |
| **Priority** | P2 — High |
| **Test Type** | Boundary / Validation |

---

### TC-011 — Leading and Trailing Spaces in Username

| Field | Detail |
|---|---|
| **Test Case ID** | TC-011 |
| **Summary** | Verify that a valid username entered with leading/trailing spaces is handled correctly (trimmed or rejected) |
| **Preconditions** | Browser is open. Page is loaded. |
| **Steps** | 1. Navigate to the application URL <br>2. Enter `  rahulshettyacademy  ` (with surrounding spaces) in `#username` <br>3. Enter `Learning@830$3mK2` in `#password` <br>4. Click `#signInBtn` |
| **Expected Result** | **Pending Requirement Clarification.** Whether the application trims leading/trailing spaces from the username before comparing against stored credentials is not confirmed from exploration. The expected outcome — login success (if the server trims input) or login failure (if it does not) — must be established with a confirmed requirement or prior execution result. |
| **Actual Result** | Not Executed |
| **Status** | Not Executed |
| **Priority** | P2 — High |
| **Test Type** | Boundary / Validation |

---

### TC-012 — Username Case Sensitivity

| Field | Detail |
|---|---|
| **Test Case ID** | TC-012 |
| **Summary** | Verify that the username field is case-sensitive |
| **Preconditions** | Browser is open. Page is loaded. |
| **Steps** | 1. Navigate to the application URL <br>2. Enter `RAHULSHETTYACADEMY` (all uppercase) in `#username` <br>3. Enter `Learning@830$3mK2` in `#password` <br>4. Click `#signInBtn` |
| **Expected Result** | Login fails. Error alert is displayed. Username comparison is case-sensitive on the server. *(Assumption A4 — not confirmed from exploration.)* |
| **Actual Result** | Not Executed |
| **Status** | Not Executed |
| **Priority** | P2 — High |
| **Test Type** | Boundary / Validation |

---

### TC-013 — Password Case Sensitivity

| Field | Detail |
|---|---|
| **Test Case ID** | TC-013 |
| **Summary** | Verify that the password field is case-sensitive |
| **Preconditions** | Browser is open. Page is loaded. |
| **Steps** | 1. Navigate to the application URL <br>2. Enter `rahulshettyacademy` in `#username` <br>3. Enter `learning@830$3mk2` (all lowercase variant of the known password) in `#password` <br>4. Click `#signInBtn` |
| **Expected Result** | **Assumption — not confirmed from exploration:** Password comparison is assumed to be case-sensitive. If confirmed, login fails and the error alert `.alert.alert-danger` is displayed. This assumption (A4) must be verified by execution before the test can be used as a definitive regression check. |
| **Actual Result** | Not Executed |
| **Status** | Not Executed |
| **Priority** | P2 — High |
| **Test Type** | Boundary / Validation |

---

### TC-015 — Special Characters in Password

| Field | Detail |
|---|---|
| **Test Case ID** | TC-015 |
| **Summary** | Verify that special characters entered in the password field are accepted without errors |
| **Preconditions** | Browser is open. Page is loaded. |
| **Steps** | 1. Navigate to the application URL <br>2. Enter `rahulshettyacademy` in `#username` <br>3. Enter `!@#$%^&*()_+[]{}` in `#password` <br>4. Click `#signInBtn` |
| **Expected Result** | Login fails (incorrect password). No application error or crash. Error alert displayed normally. |
| **Actual Result** | Not Executed |
| **Status** | Not Executed |
| **Priority** | P3 — Medium |
| **Test Type** | Boundary / Validation |

---

### TC-016 — Very Long Username (Max Length Boundary)

| Field | Detail |
|---|---|
| **Test Case ID** | TC-016 |
| **Summary** | Verify application behaviour when an extremely long string is entered in the username field |
| **Preconditions** | Browser is open. Page is loaded. No `maxlength` attribute is defined on `#username`. |
| **Steps** | 1. Navigate to the application URL <br>2. Enter a string of 500 characters (e.g., `a` repeated 500 times) in `#username` <br>3. Enter `Learning@830$3mK2` in `#password` <br>4. Click `#signInBtn` |
| **Expected Result** | **Pending Requirement Clarification.** No `maxlength` attribute was found on `#username` during exploration, so the application's specific handling of oversized input (field-level truncation, client-side rejection, or server-side error) is unconfirmed. Minimum confirmed expectation: the application must not crash or return an unhandled server error. Specific error message and truncation behaviour to be confirmed before this test can pass or fail definitively. |
| **Actual Result** | Not Executed |
| **Status** | Not Executed |
| **Priority** | P3 — Medium |
| **Test Type** | Boundary / Validation |

---

### TC-017 — Single Character Username (Minimum Length)

| Field | Detail |
|---|---|
| **Test Case ID** | TC-017 |
| **Summary** | Verify that a single-character username is handled correctly |
| **Preconditions** | Browser is open. Page is loaded. |
| **Steps** | 1. Navigate to the application URL <br>2. Enter `a` in `#username` <br>3. Enter `Learning@830$3mK2` in `#password` <br>4. Click `#signInBtn` |
| **Expected Result** | Login fails. Error alert is displayed. No crash. |
| **Actual Result** | Not Executed |
| **Status** | Not Executed |
| **Priority** | P3 — Medium |
| **Test Type** | Boundary / Validation |

---

### TC-018 — Password Masking Verification

| Field | Detail |
|---|---|
| **Test Case ID** | TC-018 |
| **Summary** | Verify that characters entered in the password field are masked (not displayed in plain text) |
| **Preconditions** | Browser is open. Page is loaded. |
| **Steps** | 1. Navigate to the application URL <br>2. Click `#password` <br>3. Type `Learning@830$3mK2` <br>4. Visually inspect the field |
| **Expected Result** | Each character is rendered as a bullet/dot (`•`). The actual characters are not visible. Field `type="password"` is confirmed. |
| **Actual Result** | Not Executed |
| **Status** | Not Executed |
| **Priority** | P1 — Critical |
| **Test Type** | UI / Functional |

---

### TC-019 — Admin Radio Button Default Selection

| Field | Detail |
|---|---|
| **Test Case ID** | TC-019 |
| **Summary** | Verify that the Admin radio button is selected by default on page load |
| **Preconditions** | Browser is open. Page has just loaded (fresh load, no prior interaction). |
| **Steps** | 1. Navigate to the application URL <br>2. Inspect `input[value="admin"]` without clicking anything |
| **Expected Result** | `input[value="admin"]` has `checked` attribute. `input[value="user"]` is unchecked. |
| **Actual Result** | Not Executed |
| **Status** | Not Executed |
| **Priority** | P2 — High |
| **Test Type** | UI / Functional |

---

### TC-020 — Switching from Admin to User Radio Button

| Field | Detail |
|---|---|
| **Test Case ID** | TC-020 |
| **Summary** | Verify that clicking the User radio button deselects Admin and triggers the confirmation modal |
| **Preconditions** | Browser is open. Page is loaded. Admin radio is selected by default. |
| **Steps** | 1. Navigate to the application URL <br>2. Click `input[value="user"]` |
| **Expected Result** | User radio becomes checked. Admin radio becomes unchecked. Modal `#myModal` appears with message "You will be limited to only fewer functionalities of the app. Proceed?" |
| **Actual Result** | Not Executed |
| **Status** | Not Executed |
| **Priority** | P2 — High |
| **Test Type** | UI / Functional |

---

### TC-021 — Modal Cancel Button Behaviour

| Field | Detail |
|---|---|
| **Test Case ID** | TC-021 |
| **Summary** | Verify that clicking Cancel on the User role modal dismisses the modal and reverts the radio selection to Admin |
| **Preconditions** | Browser is open. Page is loaded. User radio has been clicked and modal `#myModal` is visible. |
| **Steps** | 1. Navigate to the application URL <br>2. Click `input[value="user"]` to open modal <br>3. Click `#cancelBtn` |
| **Expected Result** | Modal `#myModal` is dismissed. *(Assumption A1 — not confirmed from exploration: radio selection reverts to Admin after Cancel. Result should be observed and noted on first execution.)* |
| **Actual Result** | Not Executed |
| **Status** | Not Executed |
| **Priority** | P2 — High |
| **Test Type** | UI / Functional |

---

### TC-022 — Modal Okay Button Behaviour

| Field | Detail |
|---|---|
| **Test Case ID** | TC-022 |
| **Summary** | Verify that clicking Okay on the User role modal confirms the selection and keeps User radio active |
| **Preconditions** | Browser is open. Page is loaded. User radio has been clicked and modal `#myModal` is visible. |
| **Steps** | 1. Navigate to the application URL <br>2. Click `input[value="user"]` to open modal <br>3. Click `#okayBtn` |
| **Expected Result** | Modal is dismissed. User radio remains checked. Admin radio remains unchecked. |
| **Actual Result** | Not Executed |
| **Status** | Not Executed |
| **Priority** | P2 — High |
| **Test Type** | UI / Functional |

---

### TC-023 — Switching Back from User to Admin Radio

| Field | Detail |
|---|---|
| **Test Case ID** | TC-023 |
| **Summary** | Verify that after confirming User role, clicking Admin radio switches back without a modal |
| **Preconditions** | Browser is open. User radio is confirmed active (Okay was clicked on the modal per TC-022). |
| **Steps** | 1. After TC-022 state, click `input[value="admin"]` |
| **Expected Result** | Admin radio becomes selected. No modal appears. User radio is deselected. *(Assumption — modal is expected to trigger only on switching TO the User role, not when switching away from it.)* |
| **Actual Result** | Not Executed |
| **Status** | Not Executed |
| **Priority** | P3 — Medium |
| **Test Type** | UI / Functional |

---

### TC-024 — Role Dropdown Default Value

| Field | Detail |
|---|---|
| **Test Case ID** | TC-024 |
| **Summary** | Verify that the Role dropdown defaults to "Student" on page load |
| **Preconditions** | Browser is open. Page is loaded. |
| **Steps** | 1. Navigate to the application URL <br>2. Inspect `select.form-control` without interacting |
| **Expected Result** | Dropdown displays "Student" and its value is `stud`. |
| **Actual Result** | Not Executed |
| **Status** | Not Executed |
| **Priority** | P3 — Medium |
| **Test Type** | UI / Functional |

---

### TC-025 — Role Dropdown — Select Teacher

| Field | Detail |
|---|---|
| **Test Case ID** | TC-025 |
| **Summary** | Verify that "Teacher" can be selected from the Role dropdown |
| **Preconditions** | Browser is open. Page is loaded. |
| **Steps** | 1. Navigate to the application URL <br>2. Click `select.form-control` <br>3. Select option "Teacher" (value: `teach`) |
| **Expected Result** | Dropdown displays "Teacher". Selected value is `teach`. |
| **Actual Result** | Not Executed |
| **Status** | Not Executed |
| **Priority** | P3 — Medium |
| **Test Type** | UI / Functional |

---

### TC-026 — Role Dropdown — Select Consultant

| Field | Detail |
|---|---|
| **Test Case ID** | TC-026 |
| **Summary** | Verify that "Consultant" can be selected from the Role dropdown |
| **Preconditions** | Browser is open. Page is loaded. |
| **Steps** | 1. Navigate to the application URL <br>2. Click `select.form-control` <br>3. Select option "Consultant" (value: `consult`) |
| **Expected Result** | Dropdown displays "Consultant". Selected value is `consult`. |
| **Actual Result** | Not Executed |
| **Status** | Not Executed |
| **Priority** | P3 — Medium |
| **Test Type** | UI / Functional |

---

### TC-027 — Terms Checkbox Default State

| Field | Detail |
|---|---|
| **Test Case ID** | TC-027 |
| **Summary** | Verify that the Terms & Conditions checkbox is unchecked by default on page load |
| **Preconditions** | Browser is open. Page is loaded. |
| **Steps** | 1. Navigate to the application URL <br>2. Inspect `#terms` without clicking |
| **Expected Result** | Checkbox `#terms` is unchecked. |
| **Actual Result** | Not Executed |
| **Status** | Not Executed |
| **Priority** | P3 — Medium |
| **Test Type** | UI / Functional |

---

### TC-028 — Checking and Unchecking Terms Checkbox

| Field | Detail |
|---|---|
| **Test Case ID** | TC-028 |
| **Summary** | Verify that the Terms checkbox can be toggled on and off |
| **Preconditions** | Browser is open. Page is loaded. |
| **Steps** | 1. Navigate to the application URL <br>2. Click `#terms` once — verify it is checked <br>3. Click `#terms` again — verify it is unchecked |
| **Expected Result** | First click: checkbox is checked. Second click: checkbox is unchecked. |
| **Actual Result** | Not Executed |
| **Status** | Not Executed |
| **Priority** | P3 — Medium |
| **Test Type** | UI / Functional |

---

### TC-029 — Login Without Checking Terms Checkbox

| Field | Detail |
|---|---|
| **Test Case ID** | TC-029 |
| **Summary** | Verify application behaviour when Sign In is clicked without checking the Terms checkbox |
| **Preconditions** | Browser is open. Page is loaded. Terms checkbox is unchecked. |
| **Steps** | 1. Navigate to the application URL <br>2. Enter `rahulshettyacademy` in `#username` <br>3. Enter `Learning@830$3mK2` in `#password` <br>4. Leave `#terms` unchecked <br>5. Click `#signInBtn` |
| **Expected Result** | *(Assumption A2 — behaviour not confirmed from exploration.)* Either login is blocked with a validation message, or login proceeds. Result should be observed and noted on first execution. |
| **Actual Result** | Not Executed |
| **Status** | Not Executed |
| **Priority** | P2 — High |
| **Test Type** | UI / Functional |

---

### TC-030 — Terms and Conditions Link

| Field | Detail |
|---|---|
| **Test Case ID** | TC-030 |
| **Summary** | Verify that the "terms and conditions" link is clickable and produces a visible response |
| **Preconditions** | Browser is open. Page is loaded. |
| **Steps** | 1. Navigate to the application URL <br>2. Click `a[href="#"]` (terms and conditions link) |
| **Expected Result** | **Pending Requirement Clarification.** The link uses `href="#"` which prevents navigation, but the intended trigger behaviour (a modal, inline accordion, overlay, or no-op) has not been confirmed from exploration. Expected UI response must be verified before this test can pass or fail definitively. |
| **Actual Result** | Not Executed |
| **Status** | Not Executed |
| **Priority** | P3 — Medium |
| **Test Type** | UI / Functional |

---

### TC-031 — Error Alert Visibility on Failed Login

| Field | Detail |
|---|---|
| **Test Case ID** | TC-031 |
| **Summary** | Verify that the error alert `.alert.alert-danger` becomes visible and shows the correct message after a failed login attempt |
| **Preconditions** | Browser is open. Page is loaded. Error alert is confirmed hidden in the DOM (CSS-hidden, present in DOM on page load). |
| **Steps** | 1. Navigate to the application URL <br>2. Enter `wronguser` in `#username` <br>3. Enter `wrongpassword` in `#password` <br>4. Click `#signInBtn` <br>5. Assert visibility of `.alert.alert-danger` |
| **Expected Result** | `.alert.alert-danger` transitions from hidden to visible and displays the exact text "Incorrect username/password." |
| **Actual Result** | Not Executed |
| **Status** | Not Executed |
| **Priority** | P1 — Critical |
| **Test Type** | UI / Functional |

---

### TC-032 — Error Alert Hidden on Page Load

| Field | Detail |
|---|---|
| **Test Case ID** | TC-032 |
| **Summary** | Verify that the error alert is not visible when the page is first loaded |
| **Preconditions** | Browser is open. Page has just loaded. No form submission has occurred. |
| **Steps** | 1. Navigate to the application URL <br>2. Inspect visibility of `.alert.alert-danger` |
| **Expected Result** | `.alert.alert-danger` exists in the DOM but is not visible (hidden via CSS). |
| **Actual Result** | Not Executed |
| **Status** | Not Executed |
| **Priority** | P2 — High |
| **Test Type** | UI / Functional |

---

### TC-033 — Successful Login Navigation (URL Change)

| Field | Detail |
|---|---|
| **Test Case ID** | TC-033 |
| **Summary** | Verify that after a successful login the browser URL changes away from the login page and the page content reflects authenticated state |
| **Preconditions** | Browser is open. Page is loaded. |
| **Steps** | 1. Navigate to the application URL <br>2. Enter `rahulshettyacademy` in `#username` <br>3. Enter `Learning@830$3mK2` in `#password` <br>4. Click `#signInBtn` <br>5. Observe the URL and page content after submission |
| **Expected Result** | URL changes to the authenticated page (not the login URL). Page content reflects logged-in state. |
| **Actual Result** | Not Executed |
| **Status** | Not Executed |
| **Priority** | P1 — Critical |
| **Test Type** | Functional — Positive |

> **Coverage note (vs TC-001):** TC-001 verifies that authentication succeeds (correct credentials → no error, access granted). This test specifically verifies the post-login URL transition and the page-content change — a distinct, independently assertable outcome.

---

### TC-034 — Browser Refresh Clears Form Fields

| Field | Detail |
|---|---|
| **Test Case ID** | TC-034 |
| **Summary** | Verify that refreshing the login page clears any data entered in the form fields |
| **Preconditions** | Browser is open. Page is loaded. Some data has been entered. |
| **Steps** | 1. Navigate to the application URL <br>2. Enter `rahulshettyacademy` in `#username` <br>3. Enter `Learning@830$3mK2` in `#password` <br>4. Press F5 or trigger a browser refresh <br>5. Inspect `#username` and `#password` values |
| **Expected Result** | Both fields are cleared. The page returns to its default state (Admin radio selected, dropdown on Student, checkbox unchecked, no error visible). *(Note: some browsers may auto-fill from cache — observe and note browser-specific behaviour.)* |
| **Actual Result** | Not Executed |
| **Status** | Not Executed |
| **Priority** | P3 — Medium |
| **Test Type** | Functional / Browser Behaviour |

---

### TC-035 — Browser Back After Successful Login

| Field | Detail |
|---|---|
| **Test Case ID** | TC-035 |
| **Summary** | Verify that pressing the browser Back button after a successful login does not return an accessible logged-in state from cache |
| **Preconditions** | A valid login has been performed and the user is on the authenticated page. |
| **Steps** | 1. Successfully log in (TC-001) <br>2. Click the browser Back button <br>3. Observe the resulting page and URL |
| **Expected Result** | **Pending Requirement Clarification.** Session management and cache-control behaviour after login have not been confirmed from exploration. The expected outcome (redirect to login page vs. cached authenticated page) depends on server-side session handling and HTTP cache headers, which were not inspected during exploration. Expected behaviour must be confirmed with the development team or requirement documentation before execution. |
| **Actual Result** | Not Executed |
| **Status** | Not Executed |
| **Priority** | P2 — High |
| **Test Type** | Functional / Security |

---

### TC-036 — Keyboard Navigation Through Form Fields (Tab Order)

| Field | Detail |
|---|---|
| **Test Case ID** | TC-036 |
| **Summary** | Verify that all interactive elements on the login page are reachable using the Tab key in a logical order |
| **Preconditions** | Browser is open. Page is loaded. Focus is on the browser address bar or page. |
| **Steps** | 1. Navigate to the application URL <br>2. Press Tab repeatedly and record which element receives focus each time <br>3. Expected order: Username → Password → Admin radio → User radio → Dropdown → Terms checkbox → Sign In button → Terms link |
| **Expected Result** | Each interactive element receives keyboard focus in a logical top-to-bottom order. Focus is visually indicated. All elements are reachable via keyboard alone. |
| **Actual Result** | Not Executed |
| **Status** | Not Executed |
| **Priority** | P2 — High |
| **Test Type** | UI / Accessibility |

---

### TC-037 — Submit Form Using Enter Key

| Field | Detail |
|---|---|
| **Test Case ID** | TC-037 |
| **Summary** | Verify that pressing Enter while focus is in a form field submits the form |
| **Preconditions** | Browser is open. Page is loaded. Valid credentials ready. |
| **Steps** | 1. Navigate to the application URL <br>2. Enter `rahulshettyacademy` in `#username` <br>3. Enter `Learning@830$3mK2` in `#password` <br>4. Press Enter key while focus is in `#password` |
| **Expected Result** | Form is submitted. Same result as clicking Sign In. User is redirected on success. |
| **Actual Result** | Not Executed |
| **Status** | Not Executed |
| **Priority** | P2 — High |
| **Test Type** | UI / Functional |

---

### TC-038 — Credential Hint Visible on Page

| Field | Detail |
|---|---|
| **Test Case ID** | TC-038 |
| **Summary** | Verify that the credential hint text below the Sign In button is visible and displays the correct username and password |
| **Preconditions** | Browser is open. Page is loaded. |
| **Steps** | 1. Navigate to the application URL <br>2. Inspect the paragraph element below `#signInBtn` |
| **Expected Result** | Text reads: "(username is rahulshettyacademy and Password is Learning@830$3mK2)" and is visible on the page. |
| **Actual Result** | Not Executed |
| **Status** | Not Executed |
| **Priority** | P3 — Medium |
| **Test Type** | UI / Functional |

---

### TC-039 — Sign In Button Clickable with Empty Fields

| Field | Detail |
|---|---|
| **Test Case ID** | TC-039 |
| **Summary** | Verify that the Sign In button is not disabled when fields are empty, and that form submission is handled by application logic rather than a disabled button |
| **Preconditions** | Browser is open. Page is loaded. No data entered in any field. |
| **Steps** | 1. Navigate to the application URL <br>2. Inspect `#signInBtn` without entering any data — confirm no `disabled` attribute is present <br>3. Click `#signInBtn` |
| **Expected Result** | *(Assumption A7 — DOM confirmed: no `disabled` attribute found on `#signInBtn`.)* Button is clickable. Form submission proceeds and is handled by application or server-side validation rather than a UI-level disabled state. |
| **Actual Result** | Not Executed |
| **Status** | Not Executed |
| **Priority** | P3 — Medium |
| **Test Type** | UI / Functional |

---

## Security Testing

> ⚠️ **NOTICE — NOT APPROVED FOR EXECUTION**
>
> The test cases in this section involve security-related probe inputs (reflected XSS and SQL injection). They **must not be executed** against the public application at `https://rahulshettyacademy.com/loginpagePractise/` or any shared/production environment without explicit written authorisation from the application owner.
>
> These test cases are recorded here for completeness of coverage planning only. Execution is permitted only in an isolated, authorised test environment.

---

### TC-014 — XSS Probe in Username Field

| Field | Detail |
|---|---|
| **Test Case ID** | TC-014 |
| **Summary** | Verify that a script-injection string in the username field does not execute as JavaScript or cause application errors |
| **Preconditions** | Authorised, isolated test environment. Browser is open. Page is loaded. |
| **Steps** | 1. Navigate to the application URL <br>2. Enter `<script>alert(1)</script>` in `#username` <br>3. Enter `Learning@830$3mK2` in `#password` <br>4. Click `#signInBtn` |
| **Expected Result** | Login fails gracefully. No JavaScript alert executes. No unhandled server error is returned. Error alert `.alert.alert-danger` is displayed normally. |
| **Actual Result** | Not Executed |
| **Status** | Not Executed |
| **Priority** | P1 — Critical |
| **Test Type** | Security Testing |

---

### TC-040 — SQL Injection Probe in Username Field

| Field | Detail |
|---|---|
| **Test Case ID** | TC-040 |
| **Summary** | Verify that SQL injection characters in the username field do not bypass authentication or expose a database error |
| **Preconditions** | Authorised, isolated test environment. Browser is open. Page is loaded. |
| **Steps** | 1. Navigate to the application URL <br>2. Enter `' OR '1'='1` in `#username` <br>3. Enter `anything` in `#password` <br>4. Click `#signInBtn` |
| **Expected Result** | Login fails. Error alert is displayed normally. No SQL error message is exposed in the response. No unintended authentication bypass occurs. |
| **Actual Result** | Not Executed |
| **Status** | Not Executed |
| **Priority** | P1 — Critical |
| **Test Type** | Security Testing |

---

## Summary

### Total Test Cases: 40

---

### By Test Type

| Test Type | Count | Test Case IDs |
|---|---|---|
| Functional — Positive | 4 | TC-001, TC-002, TC-003, TC-033 |
| Functional — Negative | 6 | TC-004, TC-005, TC-006, TC-007, TC-008, TC-009 |
| Boundary / Validation | 7 | TC-010, TC-011, TC-012, TC-013, TC-015, TC-016, TC-017 |
| UI / Functional | 18 | TC-018, TC-019, TC-020, TC-021, TC-022, TC-023, TC-024, TC-025, TC-026, TC-027, TC-028, TC-029, TC-030, TC-031, TC-032, TC-037, TC-038, TC-039 |
| Functional / Browser Behaviour | 1 | TC-034 |
| Functional / Security | 1 | TC-035 |
| UI / Accessibility | 1 | TC-036 |
| Security Testing ⚠️ | 2 | TC-014, TC-040 |
| **Total** | **40** | |

---

### By Priority

| Priority | Count | Test Case IDs |
|---|---|---|
| P1 — Critical | 13 | TC-001, TC-002, TC-004, TC-005, TC-006, TC-007, TC-008, TC-009, TC-014, TC-018, TC-031, TC-033, TC-040 |
| P2 — High | 14 | TC-003, TC-010, TC-011, TC-012, TC-013, TC-019, TC-020, TC-021, TC-022, TC-029, TC-032, TC-035, TC-036, TC-037 |
| P3 — Medium | 13 | TC-015, TC-016, TC-017, TC-023, TC-024, TC-025, TC-026, TC-027, TC-028, TC-030, TC-034, TC-038, TC-039 |

---

### Assumptions Made

| ID | Assumption | Affects |
|---|---|---|
| A1 | Cancel button on the User modal reverts the radio selection back to Admin (not confirmed by exploration) | TC-021 |
| A2 | The Terms checkbox does not enforce a hard block on login (behaviour not confirmed) | TC-029 |
| A3 | The "terms and conditions" `a[href="#"]` link triggers in-page content (exact behaviour not confirmed) | TC-030 |
| A4 | Username and password comparisons are case-sensitive (not confirmed from exploration) | TC-012, TC-013 |
| A5 | Whitespace-only inputs are not trimmed by the application before validation | TC-010, TC-011 |
| A6 | No `maxlength` restriction enforced on `#username` or `#password` (no attribute found in DOM) | TC-016 |
| A7 | The Sign In button (`#signInBtn`) is never disabled — confirmed by DOM inspection | TC-039 |

---

### Test Cases Requiring Requirement Clarification Before Execution

| Test Case | Ambiguity |
|---|---|
| TC-007 | Validation mechanism for empty username (no `required` attribute present) |
| TC-008 | Validation mechanism for empty password (no `required` attribute present) |
| TC-011 | Whether server trims leading/trailing spaces before credential comparison |
| TC-016 | Specific application response to oversized input (no `maxlength` in DOM) |
| TC-030 | UI behaviour triggered by `a[href="#"]` terms and conditions link |
| TC-035 | Session management and cache-control behaviour after logout/back navigation |

---

*Awaiting approval before proceeding to automation.*
