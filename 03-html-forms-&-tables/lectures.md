## tables: tr td th

- td is table data -> it definsed a cell of a table that contains data
- tr is table row -> it represent a row of cells in a table <- this what group elements together

so its like **td** must be wrap in a **tr** if we wanna group together certain elements

![alt text](</03-html-forms-&-tables/img/Udemy ScreenShot 2025-07-25 17-19-16.jpeg>)
to make this table have some header we use th

- th is table header/headings -> it defines a header

## tables: thead tbody tfoot

- this don't do much besides break your element in logical sections
- often we don't have footers for table unless necessary like totals:
<pre><code>
+----------------+--------------+
|     Item       | Expenditure  |  <-- <thead>
+----------------+--------------+
| Rent           | $1,000       |  <-- <tbody>
| Groceries      | $300         |
+----------------+--------------+
| Total          | $1,300       |  <-- <tfoot>
+----------------+--------------+
</code></pre>

## tables: colspan $ rowspan

"span" is derived from the idea of covering or extending over a certain number of rows or columns.

- colspan -> It means the cell stretches across multiple columns. -> Think: horizontal merging → left to right.
<pre><code>
  +----------+----------+
  | Total (spans 2) | ← colspan="2"
  +--------------------+
</code></pre>

- rowspan -> It means the cell stretches across multiple rows. -> Think: vertical merging → top to bottom.
<pre><code>
+--------+--------+
| Food   | Donuts |
|        +--------+  ← rowspan="2"
|        | Pizza  |
+--------+--------+
</code></pre>

### overall example

<pre><code>
+-----------+----------+-------------+
| Category | Item | Expenditure |
+-----------+----------+-------------+
| Food | Donuts | $100 |
| | Pizza | $150 | <-- rowspan=2 on "Food"
+-----------+----------+-------------+
| Utility | Electric | $200 |
+-----------+----------+-------------+
| Total | (colspan →) $450 | <-- colspan=2 on Total
+-----------+------------------------+
</code></pre>

## forms

In HTML, a < form > is used to collect user input. It's a container for input elements like text fields, checkboxes, radio buttons, buttons, etc. Forms are commonly used for tasks such as **logging in, signing up, submitting feedback, or searching.**

- form acts that group things together inputs and submit them together oveer a specified location
- form -> elements:attributes

### common form control

input element

- 20 possible types of inputs
- we only change the attribute type

Attributes

- `type`: defines the kind of input (e.g., text, email, password, number, etc.)
- `placeholder`: shows hint text before user types anything
- `name`: key used to send data when the form is submitted
- `id`: unique identifier for the input (used for labels or scripts)
- `value`: sets a default value inside the input
- `required`: makes the field mandatory to fill before submitting
- `disabled`: disables the field (not clickable, not submitted)
- `readonly`: makes input visible but not editable
- `maxlength`: limits the number of characters user can enter
- `min` / `max`: sets numeric or date range limits
- `autocomplete`: turns browser auto-fill on or off (`on` / `off`)
- `autofocus`: sets focus to this input when the page loads
- `pattern`: adds input validation using regular expressions

### forms label

- the label is associated with the label of what text belongs on it
- and also for screen reader but if we just use regular text it's not a screen reader experience
- plus when we click the text the button would also be toggled

input:id == label:for <- this must be same no matter what

### button

- Used to create clickable buttons.
- Can be used to **submit forms**, **trigger JS functions**, or **perform custom actions**.

**Common `type` Attributes:**

- `submit` – _(default)_ submits the form.
- `button` – no default action (used with JavaScript).
- `reset` – resets form fields to default values.

**Other Useful Attributes:**

- `disabled` – disables the button.
- `name` – used to reference the button in JavaScript or form data.
- `value` – value sent with form submission.

### name attribute

-The name attribute is the key used when the form is submitted.

It tells the browser:
📦 "What is this piece of data called?"

## radiobuttons checkboxes & selects

```html
<!-- 🟠 Radio Buttons: Select one option only
Use when the user must pick a single choice from a group.
Only one radio button with the same name can be selected. -->
<p>Choose a gender:</p>
<input type="radio" name="gender" value="male" /> Male
<input type="radio" name="gender" value="female" /> Female

<!-- 🟢 Checkboxes: Select multiple options
Use when the user can pick one or more options independently.
Each checkbox is separate, even if they share the same name. -->
<p>Select your hobbies:</p>
<input type="checkbox" name="hobby" value="reading" /> Reading
<input type="checkbox" name="hobby" value="sports" /> Sports
<input type="checkbox" name="hobby" value="music" /> Music

<!-- 🔵 Select Dropdown: Choose one (or more with 'multiple')
Creates a dropdown menu. Good for long lists or space-saving.
Use 'multiple' if you want users to select more than one. -->
<p>Choose your country:</p>
<select name="country">
  <option value="ph">Philippines</option>
  <option value="us">USA</option>
  <option value="jp">Japan</option>
</select>
```

### ranges & text area

```html
<!-- 🔴 Range Input: Slider to choose a number/value
Use to select a number within a range using a slider. -->
<p>Volume:</p>
<input type="range" name="volume" min="0" max="100" value="50" />

<!-- 🟤 Textarea: Multi-line text input
Use when you want the user to write longer messages or content. -->
<p>Your message:</p>
<textarea
  name="message"
  rows="4"
  cols="30"
  placeholder="Type your message here..."
></textarea>
```
